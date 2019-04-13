// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  reminder_snooze_minutes: 20,
  url_user_register : 'http://localhost:3000/api/v1/users/register',
  url_user_login : 'http://localhost:3000/api/v1/users/login',
  url_user_getusers : 'http://localhost:3000/api/v1/users/getUsers',
  url_user_auth : 'http://localhost:3000/api/v1/auth',
  url_notes_create_get : 'http://localhost:3001/api/v1/notes',
  url_notes_update : 'http://localhost:3001/api/v1/notes/',
  url_notes_add_favourite : 'http://localhost:3001/api/v1/notes/addFavorites',
  url_notes_remove_favourite : 'http://localhost:3001/api/v1/notes/removeFavorites',
  url_notes_delete : 'http://localhost:3001/api/v1/notes/delete',
  url_notes_share : 'http://localhost:3001/api/v1/notes/share',
  url_notes_addGroup : 'http://localhost:3001/api/v1/notes/addGroup',
  url_notification_gateway : 'http://localhost:3003/',
  url_notification_reminder : 'http://localhost:3003/api/v1/notifications/reminders',
  url_notification : 'http://localhost:3003/api/v1/notifications'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
