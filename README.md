# hordescore-service
This is a lookup service for the hordescore application that takes the stock code input by the user from the frontend service (https://github.com/paddycassidy/hordescore-FE), and checks whether it matches a key from a list of companies. If it does, then it will return the full company name for the stock code it matches. When a match is found it will also add a new document to the analysis collection in the Hordescore mongoDB database.

## Installation
...
