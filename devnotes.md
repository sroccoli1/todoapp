## First sprint notes: 2020, Oct 19 - Oct 27

### Coverage
This sprint will use the basic features I learned throughout the Angular basics course and I'll learn and use Material design on the way.

- Imported Material Design and created the main app components: sidenav, main content, header
- Added a Material Design custom style 
- Added ManagetodoService to manage TODOs, Added a component for displaying todo creation dialog, added the dialog
- Linked button to launch the dialog, service to manage TODOs, the dialog
- Linked button to launch the dialog
- Added a dialog then connected it to the sidenav 'Add Todo' button.

### Out of this sprint:
- Routing 
- HTTP
... But found good documentation about it.

### Current and limitations : 

- See the video on Youtube (unlisted).<br><br>
[![Sprint 1 Outcome](https://media.giphy.com/media/8kC9Q4ZYd79RpHiejj/giphy.gif)](https://youtu.be/jcZ_ZL_JvzI)<br>
- ManagetodoService does not save yet anything
- Create-Todo Modal does not create anything yet 

### Fixed problems: 

- Impacted: MatDialog. Trying to fix the Mat import in the NgModule
- Impacted: MatDialog. Problem at compilation, seems to be MatDialog...
- Impacted: MatDialog. Modal do not work