# Software Architectur Assigment 1
#### Group: Old Man with Backache
--------
1- Screenshots of Swagger for your APIs in 2.

<img src='/Resources/Swagger_List.PNG'>
<img src='/Resources/Swagger_Get.PNG'>
<img src='/Resources/Swagger_Insert.PNG'>
<img src='/Resources/Swagger_Delete.PNG'>
2- Source codes are here in this repository

3- Compare how to call the methods based on gRPC and REST API side-by-side

Function | gRpc | REST API
---------|------|-----------
List Books|client.list({}, function(error, books) {printResponse(error, books);})|
Get Book|  client.get({ id: parseInt(id) }, function(error, book) {printResponse(error, book);});|
Insert Book| client.insert(book, function(error, empty) {printResponse(error, empty);})|
Delete Book| client.delete({ id: parseInt(id) }, function(error, empty) {printResponse(error, empty);});|

4- The main differences between REST API and gRPC

REST API uses HTTP 1.1 but gRPC uses HTTP/2 which is more faster. 



5- the benefits of introduce interface in front of the gRPC and REST API of the book services

6- Based on the introduced interface, compare how to call the methods based on gRPC and REST API side-by-side
Function | gRpc | REST API
---------|------|-----------
List Books|
Get Book|
Insert Book|
Delete Book|

7- A component diagram representing the book services with and without interfaces