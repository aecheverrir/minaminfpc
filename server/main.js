import { Meteor } from 'meteor/meteor';
import '../imports/api/methods';

/*aecheverrir: aqui se define el idioma de la pagina*/
import { WebApp } from 'meteor/webapp';
WebApp.addHtmlAttributeHook(() => ({ lang: 'es' }));

Meteor.startup(() => {
  // code to run on server at startup
});
