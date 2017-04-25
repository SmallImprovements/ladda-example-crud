# Ladda CRUD Example

CRUD example application for the JavaScript caching library
__[Ladda](https://github.com/petercrona/ladda)__.

### What can I do here?

Visit the app by going to
[http://opensource.small-improvements.com/ladda-example-crud/](http://opensource.small-improvements.com/ladda-example-crud/).
_Make sure you open your developer console in your browser to observe the
network traffic_.

You will find a simple Contact List application, already populated with
some sample content. On the right side you will also see a simple
activity stream.

All API calls are made with the help of Ladda - you can find its
configuration [here](https://github.com/SmallImprovements/ladda-example-crud/tree/master/src/api).

Ladda allows us to code in a stateless fashion - in this application we
do not need to manage any state of server-side data: Our components just
make requests for `Contact` and `Activity` entities through Ladda. Through
its caching mechanisms we are guaranteed to call the server for fresh
data if needed or to receive our data instantaneously.

You can see this in implemented by looking at the code for the components
[ContactEdit](https://github.com/SmallImprovements/ladda-example-crud/blob/master/src/components/ContactEdit/index.js), [ContactList](https://github.com/SmallImprovements/ladda-example-crud/blob/master/src/components/ContactList/index.js) and [ActivityList](https://github.com/SmallImprovements/ladda-example-crud/blob/master/src/components/ActivityList/index.js).

We use a higher order component to wrap our stateless presenter
component. The HOC `withData` from
[ladda-react](https://github.com/ladda-js/ladda-react) takes a
configuration object, which defines which requests need to be fulfilled
before the component can be rendered properly. E.g. in the case of
`ContactList` we ask for a list of contacts by calling our API which is
enhanced with Ladda's caching capabilities - the result of this call is
then passed to our component as prop.

Try a couple of the following scenarios to see Ladda in action:

- Click on a contact and save some edits. Observe how we do not need to
  refetch the list of contacts. As editing a contact creates a new item in
the activity feed, we configured Ladda to invalidate activity entities
when we make changes to contacts (see
[here](https://github.com/SmallImprovements/ladda-example-crud/blob/master/src/api/index.js#L8)).
A request to fetch an updated list of activities is made.

- Click on a contact, but don't do anything - you will return to the
  list view instantaneously without any additional server communication.

- Delete a contact - Ladda again only needs to ask for updates in the activity feed, but
  not more.



