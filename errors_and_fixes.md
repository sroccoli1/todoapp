## ERROR NG6002

### Description

ERROR in node_modules/@angular/material/button/button.d.ts:22:22 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

This likely means that the library (@angular/material/button) which declares MatButton has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

22 export declare class MatButton extends _MatButtonMixinBase implements AfterViewInit, OnDestroy, CanDisable, CanColor, CanDisableRipple, FocusableOption {
                        ~~~~~~~~~
node_modules/@angular/material/dialog/dialog.d.ts:142:22 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

This likely means that the library (@angular/material/dialog) which declares MatDialog has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

142 export declare class MatDialog extends _MatDialogBase<MatDialogContainer> {
                         ~~~~~~~~~
node_modules/@angular/material/dialog/dialog-ref.d.ts:22:22 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

This likely means that the library (@angular/material/dialog) which declares MatDialogRef has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

22 export declare class MatDialogRef<T, R = any> {
                        ~~~~~~~~~~~~
node_modules/@angular/material/dialog/dialog-config.d.ts:27:22 - error NG6002: Appears in the NgModule.imports of AppModule, but could not be resolved to an NgModule class.

This likely means that the library (@angular/material/dialog) which declares MatDialogConfig has not been processed correctly by ngcc, or is not compatible with Angular Ivy. Check if a newer version of the library is available, and update if so. Also consider checking with the library's authors to see if the library is expected to be compatible with Ivy.

27 export declare class MatDialogConfig<D = any> {

### Fixed by... 

Removing unnecessary module imports from NgModel.

## ERROR TypeError: Cannot read property 'push' of undefined

### Description

core.js:4352 ERROR TypeError: Cannot read property 'push' of undefined
    at ManagetodoService.addTodo (managetodo.service.ts:15)
    at DialogexampleComponent.addTodo (dialogexample.component.ts:34)
    at DialogexampleComponent_Template_button_click_4_listener (dialogexample.component.html:36)

### Fixed by... 

Fixed by setting empty the todos array of Todo
