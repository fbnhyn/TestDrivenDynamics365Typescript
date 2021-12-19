declare namespace Form.msdyn_smartassistconfig.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_iconurl"): Xrm.Attribute<string>;
      get(name: "msdyn_isdefault"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_maxsuggestioncount"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_order"): Xrm.NumberAttribute;
      get(name: "msdyn_sourceentityname"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestioncontainertitle"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestioncontrolconfiguniquename"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestioncontroltype"): Xrm.OptionSetAttribute<msdyn_suggestioncontroltype>;
      get(name: "msdyn_suggestionprovider"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestiontype"): Xrm.OptionSetAttribute<msdyn_suggestiontype>;
      get(name: "msdyn_suggestionwebresourcemethod"): Xrm.Attribute<string>;
      get(name: "msdyn_suggestionwebresourceurl"): Xrm.Attribute<string>;
      get(name: "msdyn_uniquename"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_iconurl"): Xrm.StringControl;
      get(name: "msdyn_isdefault"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_maxsuggestioncount"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_order"): Xrm.NumberControl;
      get(name: "msdyn_sourceentityname"): Xrm.StringControl;
      get(name: "msdyn_suggestioncontainertitle"): Xrm.StringControl;
      get(name: "msdyn_suggestioncontrolconfiguniquename"): Xrm.StringControl;
      get(name: "msdyn_suggestioncontroltype"): Xrm.OptionSetControl<msdyn_suggestioncontroltype>;
      get(name: "msdyn_suggestionprovider"): Xrm.StringControl;
      get(name: "msdyn_suggestiontype"): Xrm.OptionSetControl<msdyn_suggestiontype>;
      get(name: "msdyn_suggestionwebresourcemethod"): Xrm.StringControl;
      get(name: "msdyn_suggestionwebresourceurl"): Xrm.StringControl;
      get(name: "msdyn_uniquename"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_iconurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_isdefault"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_maxsuggestioncount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_order"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_sourceentityname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestioncontainertitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestioncontrolconfiguniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestioncontroltype"): Xrm.OptionSetAttribute<msdyn_suggestioncontroltype>;
    getAttribute(attributeName: "msdyn_suggestionprovider"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestiontype"): Xrm.OptionSetAttribute<msdyn_suggestiontype>;
    getAttribute(attributeName: "msdyn_suggestionwebresourcemethod"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_suggestionwebresourceurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_uniquename"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_iconurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_isdefault"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_maxsuggestioncount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_order"): Xrm.NumberControl;
    getControl(controlName: "msdyn_sourceentityname"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestioncontainertitle"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestioncontrolconfiguniquename"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestioncontroltype"): Xrm.OptionSetControl<msdyn_suggestioncontroltype>;
    getControl(controlName: "msdyn_suggestionprovider"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestiontype"): Xrm.OptionSetControl<msdyn_suggestiontype>;
    getControl(controlName: "msdyn_suggestionwebresourcemethod"): Xrm.StringControl;
    getControl(controlName: "msdyn_suggestionwebresourceurl"): Xrm.StringControl;
    getControl(controlName: "msdyn_uniquename"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
