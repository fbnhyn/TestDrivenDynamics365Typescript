declare namespace Form.msdyn_channelprovider.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_apiversion"): Xrm.OptionSetAttribute<msdyn_apiversionoptions>;
      get(name: "msdyn_channelurl"): Xrm.Attribute<string>;
      get(name: "msdyn_customparams"): Xrm.Attribute<string>;
      get(name: "msdyn_enableanalytics"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enableoutbound"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_label"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_sortorder"): Xrm.NumberAttribute;
      get(name: "msdyn_trusteddomain"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_apiversion"): Xrm.OptionSetControl<msdyn_apiversionoptions>;
      get(name: "msdyn_channelurl"): Xrm.StringControl;
      get(name: "msdyn_customparams"): Xrm.StringControl;
      get(name: "msdyn_enableanalytics"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enableoutbound"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_label"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_sortorder"): Xrm.NumberControl;
      get(name: "msdyn_trusteddomain"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_apiversion"): Xrm.OptionSetAttribute<msdyn_apiversionoptions>;
    getAttribute(attributeName: "msdyn_channelurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customparams"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enableanalytics"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enableoutbound"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_label"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sortorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_trusteddomain"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_apiversion"): Xrm.OptionSetControl<msdyn_apiversionoptions>;
    getControl(controlName: "msdyn_channelurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_customparams"): Xrm.StringControl;
    getControl(controlName: "msdyn_enableanalytics"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enableoutbound"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_label"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_sortorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_trusteddomain"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
