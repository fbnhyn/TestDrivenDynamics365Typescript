declare namespace Form.msdyn_consoleappparameterdefinition.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_defaultvalue"): Xrm.Attribute<string>;
      get(name: "msdyn_isruntime"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_runtimetype"): Xrm.OptionSetAttribute<msdyn_consoleapplicationparameterruntimetype>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_defaultvalue"): Xrm.StringControl;
      get(name: "msdyn_isruntime"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_runtimetype"): Xrm.OptionSetControl<msdyn_consoleapplicationparameterruntimetype>;
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
    getAttribute(attributeName: "msdyn_defaultvalue"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_isruntime"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_runtimetype"): Xrm.OptionSetAttribute<msdyn_consoleapplicationparameterruntimetype>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_defaultvalue"): Xrm.StringControl;
    getControl(controlName: "msdyn_isruntime"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_runtimetype"): Xrm.OptionSetControl<msdyn_consoleapplicationparameterruntimetype>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
