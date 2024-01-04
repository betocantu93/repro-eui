// Types for compiled templates
declare module '@addons/prysmex-ui/templates/*' {
  import type { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}

declare module 'ember-moment/services/moment' {
  import Service from '@ember/service';

  import type { Moment } from 'moment';

  class MomentService extends Service {
    moment(str?: string | Date): Moment;
  }

  export default MomentService;
}
