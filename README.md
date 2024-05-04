# 2C2P web
This is a software architect technical assignment given from 2C2P

# Requirement

Create Web application with ability to:

1) Upload file. Create a web-page with standard file uploader. Must support both 
formats csv and xml. File size is max 1 MB. Save data into database. Feel free to 
design database structure that is suitable for this.
    a) If file is in unknown format then return error message "Unknown format". 
    b) If file didn’t pass validation return Bad Request with all validation messages.
    c) If everything is okay then return HTTP Code 200.
    
2) Get all transactions. Create API methods:
    a) by Currency
    b) by date range
    c) by status

Transaction should display these values: 
    a) Id
    b) Payment = Amount + CurrencyCode
    c) Status in unified format (see table below)

Transaction status mappings:
[CSV]       [XML]       [Output Status]
Approved    Approved    A
Failed      Rejected    R
Finished    Done        D

Example of output:
[
    { "id":"Inv00001", "payment":"200.00 USD", "Status": "D"},
    { "id":"Inv00002", "payment":"10000.00 EUR", "Status": "R"},
    { "id":"Invoice0000001", "payment":"1000.00 USD", "Status": "A"},
    { "id":"Invoice0000002", "payment":"300.00 USD", "Status": "R"}
]