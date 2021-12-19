declare namespace Form.msdyn_scheduleboardsetting.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_bookbasedon"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customtabname"): Xrm.Attribute<string>;
      get(name: "msdyn_customtabwebresource"): Xrm.Attribute<string>;
      get(name: "msdyn_fullybookedcolor"): Xrm.Attribute<string>;
      get(name: "msdyn_hidecancelled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_issynchronizeresources"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_mapviewtabplacement"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_notbookedcolor"): Xrm.Attribute<string>;
      get(name: "msdyn_ordernumber"): Xrm.NumberAttribute;
      get(name: "msdyn_organizationalunittooltipsviewid"): Xrm.Attribute<string>;
      get(name: "msdyn_organizationalunitviewid"): Xrm.Attribute<string>;
      get(name: "msdyn_overbookedcolor"): Xrm.Attribute<string>;
      get(name: "msdyn_partiallybookedcolor"): Xrm.Attribute<string>;
      get(name: "msdyn_saavailableicon"): Xrm.Attribute<string>;
      get(name: "msdyn_sapartiallyavailableicon"): Xrm.Attribute<string>;
      get(name: "msdyn_saunavailableicon"): Xrm.Attribute<string>;
      get(name: "msdyn_scheduleralertsview"): Xrm.Attribute<string>;
      get(name: "msdyn_schedulerresourcedetailsview"): Xrm.Attribute<string>;
      get(name: "msdyn_schedulerresourcetooltipview"): Xrm.Attribute<string>;
      get(name: "msdyn_settings"): Xrm.Attribute<string>;
      get(name: "msdyn_sharetype"): Xrm.OptionSetAttribute<msdyn_scheduleboardsetting_msdyn_sharetype>;
      get(name: "msdyn_tabname"): Xrm.Attribute<string>;
      get(name: "msdyn_unscheduledrequirementsviewid"): Xrm.Attribute<string>;
      get(name: "msdyn_unscheduledwopagereccount"): Xrm.NumberAttribute;
      get(name: "msdyn_workinghourscolor"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_scheduleboardsetting_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_FullyBookedColor"): Xrm.WebResourceControl;
      get(name: "WebResource_NotBookedColor"): Xrm.WebResourceControl;
      get(name: "WebResource_OverbookedColor"): Xrm.WebResourceControl;
      get(name: "WebResource_PartiallyBookedColor"): Xrm.WebResourceControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_scheduleboardsetting_statecode>;
      get(name: "msdyn_bookbasedon"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customtabname"): Xrm.StringControl;
      get(name: "msdyn_customtabwebresource"): Xrm.StringControl;
      get(name: "msdyn_fullybookedcolor"): Xrm.StringControl;
      get(name: "msdyn_hidecancelled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_issynchronizeresources"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_mapviewtabplacement"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_notbookedcolor"): Xrm.StringControl;
      get(name: "msdyn_ordernumber"): Xrm.NumberControl;
      get(name: "msdyn_organizationalunittooltipsviewid"): Xrm.StringControl;
      get(name: "msdyn_organizationalunitviewid"): Xrm.StringControl;
      get(name: "msdyn_overbookedcolor"): Xrm.StringControl;
      get(name: "msdyn_partiallybookedcolor"): Xrm.StringControl;
      get(name: "msdyn_saavailableicon"): Xrm.StringControl;
      get(name: "msdyn_sapartiallyavailableicon"): Xrm.StringControl;
      get(name: "msdyn_saunavailableicon"): Xrm.StringControl;
      get(name: "msdyn_scheduleralertsview"): Xrm.StringControl;
      get(name: "msdyn_schedulerresourcedetailsview"): Xrm.StringControl;
      get(name: "msdyn_schedulerresourcetooltipview"): Xrm.StringControl;
      get(name: "msdyn_settings"): Xrm.StringControl;
      get(name: "msdyn_sharetype"): Xrm.OptionSetControl<msdyn_scheduleboardsetting_msdyn_sharetype>;
      get(name: "msdyn_tabname"): Xrm.StringControl;
      get(name: "msdyn_unscheduledrequirementsviewid"): Xrm.StringControl;
      get(name: "msdyn_unscheduledwopagereccount"): Xrm.NumberControl;
      get(name: "msdyn_workinghourscolor"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_bookbasedon"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customtabname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customtabwebresource"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fullybookedcolor"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_hidecancelled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_issynchronizeresources"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_mapviewtabplacement"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_notbookedcolor"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ordernumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_organizationalunittooltipsviewid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_organizationalunitviewid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_overbookedcolor"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_partiallybookedcolor"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_saavailableicon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sapartiallyavailableicon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_saunavailableicon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_scheduleralertsview"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_schedulerresourcedetailsview"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_schedulerresourcetooltipview"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_settings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sharetype"): Xrm.OptionSetAttribute<msdyn_scheduleboardsetting_msdyn_sharetype>;
    getAttribute(attributeName: "msdyn_tabname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_unscheduledrequirementsviewid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_unscheduledwopagereccount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_workinghourscolor"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_scheduleboardsetting_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_FullyBookedColor"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_NotBookedColor"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_OverbookedColor"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_PartiallyBookedColor"): Xrm.WebResourceControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_scheduleboardsetting_statecode>;
    getControl(controlName: "msdyn_bookbasedon"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customtabname"): Xrm.StringControl;
    getControl(controlName: "msdyn_customtabwebresource"): Xrm.StringControl;
    getControl(controlName: "msdyn_fullybookedcolor"): Xrm.StringControl;
    getControl(controlName: "msdyn_hidecancelled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_issynchronizeresources"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_mapviewtabplacement"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_notbookedcolor"): Xrm.StringControl;
    getControl(controlName: "msdyn_ordernumber"): Xrm.NumberControl;
    getControl(controlName: "msdyn_organizationalunittooltipsviewid"): Xrm.StringControl;
    getControl(controlName: "msdyn_organizationalunitviewid"): Xrm.StringControl;
    getControl(controlName: "msdyn_overbookedcolor"): Xrm.StringControl;
    getControl(controlName: "msdyn_partiallybookedcolor"): Xrm.StringControl;
    getControl(controlName: "msdyn_saavailableicon"): Xrm.StringControl;
    getControl(controlName: "msdyn_sapartiallyavailableicon"): Xrm.StringControl;
    getControl(controlName: "msdyn_saunavailableicon"): Xrm.StringControl;
    getControl(controlName: "msdyn_scheduleralertsview"): Xrm.StringControl;
    getControl(controlName: "msdyn_schedulerresourcedetailsview"): Xrm.StringControl;
    getControl(controlName: "msdyn_schedulerresourcetooltipview"): Xrm.StringControl;
    getControl(controlName: "msdyn_settings"): Xrm.StringControl;
    getControl(controlName: "msdyn_sharetype"): Xrm.OptionSetControl<msdyn_scheduleboardsetting_msdyn_sharetype>;
    getControl(controlName: "msdyn_tabname"): Xrm.StringControl;
    getControl(controlName: "msdyn_unscheduledrequirementsviewid"): Xrm.StringControl;
    getControl(controlName: "msdyn_unscheduledwopagereccount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_workinghourscolor"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
