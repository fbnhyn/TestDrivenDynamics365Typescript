declare namespace Form.msdyn_schedulingparameter.Main {
  namespace Information1 {
    namespace Tabs {
      interface tab_5 extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_autoupdatebookingtravel"): Xrm.OptionSetAttribute<msdyn_autoupdatebookingtraveltype>;
      get(name: "msdyn_connecttomaps"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customgeolatitudefield"): Xrm.Attribute<string>;
      get(name: "msdyn_customgeolocationentity"): Xrm.Attribute<string>;
      get(name: "msdyn_customgeolongitudefield"): Xrm.Attribute<string>;
      get(name: "msdyn_customgeoresourcefield"): Xrm.Attribute<string>;
      get(name: "msdyn_customgeotimestampfield"): Xrm.Attribute<string>;
      get(name: "msdyn_defaultradiusunit"): Xrm.OptionSetAttribute<msdyn_distanceunit>;
      get(name: "msdyn_defaultradiusvalue"): Xrm.NumberAttribute;
      get(name: "msdyn_disablesanitizinghtmltemplates"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enableappointments"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablecustomgeolocation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enableoutlookschedules"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_geolocationexpiresafterxminutes"): Xrm.NumberAttribute;
      get(name: "msdyn_geolocationrefreshintervalseconds"): Xrm.NumberAttribute;
      get(name: "msdyn_internalflag"): Xrm.Attribute<string>;
      get(name: "msdyn_mapapikey"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_saautofilterserviceterritory"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_scheduleboardrefreshintervalseconds"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_autoupdatebookingtravel"): Xrm.OptionSetControl<msdyn_autoupdatebookingtraveltype>;
      get(name: "msdyn_connecttomaps"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customgeolatitudefield"): Xrm.StringControl;
      get(name: "msdyn_customgeolocationentity"): Xrm.StringControl;
      get(name: "msdyn_customgeolongitudefield"): Xrm.StringControl;
      get(name: "msdyn_customgeoresourcefield"): Xrm.StringControl;
      get(name: "msdyn_customgeotimestampfield"): Xrm.StringControl;
      get(name: "msdyn_defaultradiusunit"): Xrm.OptionSetControl<msdyn_distanceunit>;
      get(name: "msdyn_defaultradiusvalue"): Xrm.NumberControl;
      get(name: "msdyn_disablesanitizinghtmltemplates"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enableappointments"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablecustomgeolocation"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enableoutlookschedules"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_geolocationexpiresafterxminutes"): Xrm.NumberControl;
      get(name: "msdyn_geolocationrefreshintervalseconds"): Xrm.NumberControl;
      get(name: "msdyn_internalflag"): Xrm.StringControl;
      get(name: "msdyn_mapapikey"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_saautofilterserviceterritory"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_scheduleboardrefreshintervalseconds"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_5"): Xrm.PageTab<Tabs.tab_5>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyn_autoupdatebookingtravel"): Xrm.OptionSetAttribute<msdyn_autoupdatebookingtraveltype>;
    getAttribute(attributeName: "msdyn_connecttomaps"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customgeolatitudefield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customgeolocationentity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customgeolongitudefield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customgeoresourcefield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customgeotimestampfield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_defaultradiusunit"): Xrm.OptionSetAttribute<msdyn_distanceunit>;
    getAttribute(attributeName: "msdyn_defaultradiusvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_disablesanitizinghtmltemplates"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enableappointments"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablecustomgeolocation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enableoutlookschedules"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_geolocationexpiresafterxminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_geolocationrefreshintervalseconds"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_internalflag"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_mapapikey"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_saautofilterserviceterritory"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_scheduleboardrefreshintervalseconds"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_autoupdatebookingtravel"): Xrm.OptionSetControl<msdyn_autoupdatebookingtraveltype>;
    getControl(controlName: "msdyn_connecttomaps"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customgeolatitudefield"): Xrm.StringControl;
    getControl(controlName: "msdyn_customgeolocationentity"): Xrm.StringControl;
    getControl(controlName: "msdyn_customgeolongitudefield"): Xrm.StringControl;
    getControl(controlName: "msdyn_customgeoresourcefield"): Xrm.StringControl;
    getControl(controlName: "msdyn_customgeotimestampfield"): Xrm.StringControl;
    getControl(controlName: "msdyn_defaultradiusunit"): Xrm.OptionSetControl<msdyn_distanceunit>;
    getControl(controlName: "msdyn_defaultradiusvalue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_disablesanitizinghtmltemplates"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enableappointments"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablecustomgeolocation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enableoutlookschedules"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_geolocationexpiresafterxminutes"): Xrm.NumberControl;
    getControl(controlName: "msdyn_geolocationrefreshintervalseconds"): Xrm.NumberControl;
    getControl(controlName: "msdyn_internalflag"): Xrm.StringControl;
    getControl(controlName: "msdyn_mapapikey"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_saautofilterserviceterritory"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_scheduleboardrefreshintervalseconds"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
