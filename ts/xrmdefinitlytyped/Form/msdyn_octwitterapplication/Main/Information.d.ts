declare namespace Form.msdyn_octwitterapplication.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_twitterapplicationsaved"): Xrm.Attribute<string>;
      get(name: "msdyn_twittercallbackurl"): Xrm.Attribute<string>;
      get(name: "msdyn_twitterconsumerkey"): Xrm.Attribute<string>;
      get(name: "msdyn_twitterconsumersecret"): Xrm.Attribute<string>;
      get(name: "msdyn_twitterenvironmentname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "TwitterHandles"): Xrm.SubGridControl<"msdyn_octwitterhandle">;
      get(name: "WebResource_CopyTwitterCallbackUrl"): Xrm.WebResourceControl;
      get(name: "WebResource_ShowHideTwitterConsumerKey"): Xrm.WebResourceControl;
      get(name: "WebResource_ShowHideTwitterConsumerSecret"): Xrm.WebResourceControl;
      get(name: "WebResource_TwitterAccountInstructions"): Xrm.WebResourceControl;
      get(name: "WebResource_TwitterApplicationSaved"): Xrm.WebResourceControl;
      get(name: "WebResource_TwitterCallbackUrlDisclaimer"): Xrm.WebResourceControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_twitterapplicationsaved"): Xrm.StringControl;
      get(name: "msdyn_twittercallbackurl"): Xrm.StringControl;
      get(name: "msdyn_twitterconsumerkey"): Xrm.StringControl;
      get(name: "msdyn_twitterconsumersecret"): Xrm.StringControl;
      get(name: "msdyn_twitterenvironmentname"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_twitterapplicationsaved"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_twittercallbackurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_twitterconsumerkey"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_twitterconsumersecret"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_twitterenvironmentname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "TwitterHandles"): Xrm.SubGridControl<"msdyn_octwitterhandle">;
    getControl(controlName: "WebResource_CopyTwitterCallbackUrl"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_ShowHideTwitterConsumerKey"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_ShowHideTwitterConsumerSecret"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TwitterAccountInstructions"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TwitterApplicationSaved"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TwitterCallbackUrlDisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_twitterapplicationsaved"): Xrm.StringControl;
    getControl(controlName: "msdyn_twittercallbackurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_twitterconsumerkey"): Xrm.StringControl;
    getControl(controlName: "msdyn_twitterconsumersecret"): Xrm.StringControl;
    getControl(controlName: "msdyn_twitterenvironmentname"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
