# RetailApplicationReactJS
Alfi Goyal <alfigoyal@gmail.com>

```Application Screenshot1: @``` (https://github.com/AlfiGoyal/RetailApplicationReactJS/blob/master/ApplicationScreenshot1.PNG)
```Application Screenshot2: @``` (https://github.com/AlfiGoyal/RetailApplicationReactJS/blob/master/ApplicationScreenshot2.PNG)

## Overview
myRetail is a rapidly growing company with HQ in Richmond, VA and over 200 stores across the east coast. The company’s annual revenue last year was $5 billion and growing at the rate of 10% year over year. myRetail sells general merchandise products, including a fast growing fresh grocery segment. The stores average 80,000 sq. ft. in size and carry around 20,000 products. myRetail wants to provide a multi-channel experience for its customers online. myRetail is comparing solution options for the online grocery store. Create a web application that does the following: 
1) Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the user interface. 
2) Use the provided json file, item-data.json, to populate the title, images and price. 
3) The client side code can be backbone, angular or another framework of your choice. React (additional library’s such as Redux are welcome). Use node to run the application. 
4) Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1. 
5) Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2. 
6) Create a carousel to scroll through the images 

Deliverables:
1. Test your code - simulate functional testing needs by generating test scripts (automation test cases preferred). 
2. Build your code and package using gulp, grunt or other tools of your choice. 
3. Provide approach to deploy code in live environment - continuous delivery flow diagram will suffice. 
4. Store code in a public git repository like GitHub, GitLab, BitBucket, or Visual Studio Team Services and forward link to Staffing Specialist and Recruiter. 

## Environment Setup
1. Make sure you have Nodejs installed in your machine. If not, download the same from the link: (https://nodejs.org/en/)
2. Clone/Download the RetailApplicationReactJS repository.
3. Open command prompt and go to RetailApplicationReactJS directory.
4. Run the command ```npm install```. That would also install cypress js for running the testcases.
5. Next run the command ```npm start``` to launch the application. It will automatically open (http://localhost:3000) in your browser. It works well on Google chrome as of now.
6. Open another command prompt and run ```npx cypress open``` to run the automated testcases. Click on run all specs button which would automatically start running your test cases.

## Status of Project Deliverables
#### 1) Use the provided design docs, desktop.psd and mobile.psd, as general guidelines to create the user interface.
```Done:``` Available on (http://localhost:3000) once you execute Step 5 in Environment Setup.
#### 2) Use the provided json file, item-data.json, to populate the title, images and price. 
```Done:``` All these items are populated using item-data.json
#### 3) The client side code can be backbone, angular or another framework of your choice. React (additional library’s such as Redux are welcome). Use node to run the application. 
```Done:``` Created a React application and am using node to run the application.
#### 4) Show the add to cart button only if the item is available online, purchasingChannelCode equals 0 or 1. 
```Done:``` Could be tested by changing value of purchasingChannelCode in item-data.json.
#### 5) Show the pick up in store only if the item is available instore, purchasingChannelCode equals 0 or 2. 
```Done:``` Could be tested by changing value of purchasingChannelCode in item-data.json.
#### 6) Create a carousel to scroll through the images 
```Limitation:``` The link to alternate images do not work. Although it gives me the message image not available I have commented and written the codes had these images be working.
```Done partially:```: Did not get time to get the carousel designed exactly as psd but the UI has a carousel that scrolls through the images.
#### Deliverables
#### 1. Test your code - simulate functional testing needs by generating test scripts (automation test cases preferred). 
```Done:``` Automation test cases using cypress js. A lot of test cases could be written for the same but given the time constraint, I have written test cases testing quantity of product increasing decreasing on + and - button clicks, title, price of product, etc.
#### 2. Build your code and package using gulp, grunt or other tools of your choice. 
#### 3. Provide approach to deploy code in live environment - continuous delivery flow diagram will suffice. 
```Done:``` Added a ppt of a continuous delivery flow diagram - ContinuousDelivery.pptx in the repo (https://github.com/AlfiGoyal/RetailApplicationReactJS/blob/master/ContinuousDelivery.pptx)
#### 4. Store code in a public git repository like GitHub, GitLab, BitBucket, or Visual Studio Team Services and forward link to Staffing Specialist and Recruiter. 
``` Done:``` Commited the application on github (https://github.com/AlfiGoyal/RetailApplicationReactJS)
