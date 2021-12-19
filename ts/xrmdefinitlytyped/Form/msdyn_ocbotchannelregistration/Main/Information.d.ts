declare namespace Form.msdyn_ocbotchannelregistration.Main {
  namespace Information {
    namespace Tabs {
      interface a5bda06f065c4b0cb9631a94d7693649 extends Xrm.SectionCollectionBase {
        get(name: "{3c9cb577-f8e3-4468-912d-98fef8318fac}"): Xrm.PageSection;
        get(name: "{a5bda06f-065c-4b0c-b963-1a94d7693649}_section_2"): Xrm.PageSection;
        get(name: "{a5bda06f-065c-4b0c-b963-1a94d7693649}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_iscustommessagingbcr"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_iscustommessagingcreated"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_lastvalidateddate"): Xrm.DateAttribute;
      get(name: "msdyn_messagingendpoint"): Xrm.Attribute<string>;
      get(name: "msdyn_msappid"): Xrm.Attribute<string>;
      get(name: "msdyn_msappsecret"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_validationstatus"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "CustomMessagingChannels"): Xrm.SubGridControl<"msdyn_occustommessagingchannel">;
      get(name: "WebResource_CopyCustomMessagingEndpointUrl"): Xrm.WebResourceControl;
      get(name: "WebResource_CustomMessagingAccountDetailsDisclaimer"): Xrm.WebResourceControl;
      get(name: "WebResource_CustomMessagingEndpointUrlDisclaimer"): Xrm.WebResourceControl;
      get(name: "WebResource_CustomMessagingValidateButton"): Xrm.WebResourceControl;
      get(name: "WebResource_ShowHideCustomMessagingMSAppSecret"): Xrm.WebResourceControl;
      get(name: "msdyn_iscustommessagingbcr"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_iscustommessagingcreated"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_lastvalidateddate"): Xrm.DateControl;
      get(name: "msdyn_messagingendpoint"): Xrm.StringControl;
      get(name: "msdyn_msappid"): Xrm.StringControl;
      get(name: "msdyn_msappsecret"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_validationstatus"): Xrm.StringControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{a5bda06f-065c-4b0c-b963-1a94d7693649}"): Xrm.PageTab<Tabs.a5bda06f065c4b0cb9631a94d7693649>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_iscustommessagingbcr"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_iscustommessagingcreated"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_lastvalidateddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_messagingendpoint"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_msappid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_msappsecret"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_validationstatus"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "CustomMessagingChannels"): Xrm.SubGridControl<"msdyn_occustommessagingchannel">;
    getControl(controlName: "WebResource_CopyCustomMessagingEndpointUrl"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_CustomMessagingAccountDetailsDisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_CustomMessagingEndpointUrlDisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_CustomMessagingValidateButton"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_ShowHideCustomMessagingMSAppSecret"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_iscustommessagingbcr"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_iscustommessagingcreated"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_lastvalidateddate"): Xrm.DateControl;
    getControl(controlName: "msdyn_messagingendpoint"): Xrm.StringControl;
    getControl(controlName: "msdyn_msappid"): Xrm.StringControl;
    getControl(controlName: "msdyn_msappsecret"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_validationstatus"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
