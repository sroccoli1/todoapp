# Todo App

**Assignment for all developer candidates at Tecinspire**

Create a simple TODO Style Angular application using the Angular Material library and the FLEX layout. 
The components you need can be found in the Angular Material library. 
The task is to use the angular / flex-layout (https://github.com/angular/flex-layout) library to lay out the tags, 
alternatively you can do this with CSS FLEX (https://css-tricks.com/snippets/css/ a-guide-to-flexbox/).

## Resources:
- [Angular](https://angular.io/start) 
- [Material Design](https://material.angular.io/components/categories) 
- [Flexbox](https://github.com/angular/flex-layout/wiki)

## Instructions

### 1. Create a new Angular project called Todo App
### 2. Divide the main page into sidenavs (material component) and content (router-outlet).
### 3. Add a button to the sidenav to open a new modal Dialog (material component)

1. Make a form for that Dialog component using material forms (reactive forms)
2. Add fields title and text to the form
3. Add cancel and save buttons to dialog
### 4. Create a CRUD service to store data and manage TODO.
### 5. List the titles of all TODOs in sidenac above the “Add new” button.
### 6. Create a new page where you can view and manage TODOs when you click on the TODO title in the links. This page is displayed in main content (router-outlet)
#### 1. Fields must be editable
#### 2. Create the following actions
1. Delete TODO
2. Save TODO
3. Mark done / not done
4. If TODO has been dode, underline the header  in the title sidenav listing.

## GUI (my proposition) 
This is where I'm going to. See the video on Youtube (unlisted).<br><br>
[![Concept]()]()<br>

**Play with it!**<br>
Here is the [interactive presentation (Google Slide)](https://docs.google.com/presentation/d/1_viCUeWmkG_seoqqHQUTjdlEZX5zTAcnJlipYdul-68/edit?usp=sharing)

Note: I don't know if can I do it, but I started! :-)<br><br>

## Current state

**Sprint #3 outcome**<br><br>
In this video we create 3 todos, update then delete them. Routing is set up and the CRUD service is local.<br><br>
[![Sprint 3 Non-Final Outcome](https://media.giphy.com/media/z3Xvy4aQmhAIIF8QkG/source.gif)](https://youtu.be/CaAz6YqrHkk)<br>

## Sprint log

[Here it is](https://github.com/sroccoli1/todoapp/blob/main/devnotes.md) 

## Errors and fixes log

[My own record of errors and fixes.](https://github.com/sroccoli1/todoapp/blob/main/errors_and_fixes.md)

## I want to check this out - How to ?

1. Pull the <code>master</code> branch!

2. Run <code>npm install</code> inside this project folder to install all dependencies.

Make sure you use the latest version of the CLI (upgrade guide below)

3. Run <code>ng serve</code> to see the app in action (try <code>npm start</code> in case <code>ng serve</code> fails).


### How to upgrade the CLI

Run the below commands - only use "sudo" on Mac/ Linux.

<code>sudo npm uninstall -g angular-cli @angular/cli</code><br>
<code>npm cache clean --force</code><br>
<code>sudo npm install -g @angular/cli</code><br>

