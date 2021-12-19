declare namespace Form.slaitem.Main {
  namespace Information {
    namespace Tabs {
      interface tabUC extends Xrm.SectionCollectionBase {
        get(name: "Actions"): Xrm.PageSection;
        get(name: "ApplicableWhen"): Xrm.PageSection;
        get(name: "PauseConfiguration"): Xrm.PageSection;
        get(name: "SuccessConditions"): Xrm.PageSection;
        get(name: "Warn and Fail Duration"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actionurl"): Xrm.Attribute<string>;
      get(name: "allowpauseresume"): Xrm.OptionSetAttribute<boolean>;
      get(name: "applicableentity"): Xrm.Attribute<string>;
      get(name: "businesshoursid"): Xrm.LookupAttribute<"calendar">;
      get(name: "failureafter"): Xrm.NumberAttribute;
      get(name: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_pauseconfigurationxml"): Xrm.Attribute<string>;
      get(name: "msdyn_slakpiid"): Xrm.LookupAttribute<"msdyn_slakpi">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "slaid"): Xrm.LookupAttribute<"sla">;
      get(name: "warnafter"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_preview"): Xrm.WebResourceControl;
      get(name: "WebResource_preview1"): Xrm.WebResourceControl;
      get(name: "WebResource_slaitem_applicablewhen_notification"): Xrm.WebResourceControl;
      get(name: "WebResource_slaitem_success_notification"): Xrm.WebResourceControl;
      get(name: "actionurl"): Xrm.StringControl;
      get(name: "allowpauseresume"): Xrm.OptionSetControl<boolean>;
      get(name: "applicableentity"): Xrm.StringControl;
      get(name: "applicablewhencontrol"): Xrm.BaseControl;
      get(name: "businesshoursid"): Xrm.LookupControl<"calendar">;
      get(name: "failureafter"): Xrm.NumberControl;
      get(name: "failureafterUCI"): Xrm.NumberControl;
      get(name: "header_slaid"): Xrm.LookupControl<"sla">;
      get(name: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_pauseconfigurationxml"): Xrm.StringControl;
      get(name: "msdyn_slakpiid"): Xrm.LookupControl<"msdyn_slakpi">;
      get(name: "name"): Xrm.StringControl;
      get(name: "name1"): Xrm.StringControl;
      get(name: "relatedcasefield"): Xrm.OptionSetControl<number>;
      get(name: "successconditioncontrol"): Xrm.BaseControl;
      get(name: "warnafter"): Xrm.NumberControl;
      get(name: "warnafterUCI"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tabUC"): Xrm.PageTab<Tabs.tabUC>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "actionurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "allowpauseresume"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "applicableentity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "businesshoursid"): Xrm.LookupAttribute<"calendar">;
    getAttribute(attributeName: "failureafter"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_pauseconfigurationxml"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_slakpiid"): Xrm.LookupAttribute<"msdyn_slakpi">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "slaid"): Xrm.LookupAttribute<"sla">;
    getAttribute(attributeName: "warnafter"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_preview"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_preview1"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_slaitem_applicablewhen_notification"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_slaitem_success_notification"): Xrm.WebResourceControl;
    getControl(controlName: "actionurl"): Xrm.StringControl;
    getControl(controlName: "allowpauseresume"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "applicableentity"): Xrm.StringControl;
    getControl(controlName: "applicablewhencontrol"): Xrm.BaseControl;
    getControl(controlName: "businesshoursid"): Xrm.LookupControl<"calendar">;
    getControl(controlName: "failureafter"): Xrm.NumberControl;
    getControl(controlName: "failureafterUCI"): Xrm.NumberControl;
    getControl(controlName: "header_slaid"): Xrm.LookupControl<"sla">;
    getControl(controlName: "msdyn_advancedpauseconfiguration"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_pauseconfigurationxml"): Xrm.StringControl;
    getControl(controlName: "msdyn_slakpiid"): Xrm.LookupControl<"msdyn_slakpi">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "name1"): Xrm.StringControl;
    getControl(controlName: "relatedcasefield"): Xrm.OptionSetControl<number>;
    getControl(controlName: "successconditioncontrol"): Xrm.BaseControl;
    getControl(controlName: "warnafter"): Xrm.NumberControl;
    getControl(controlName: "warnafterUCI"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
