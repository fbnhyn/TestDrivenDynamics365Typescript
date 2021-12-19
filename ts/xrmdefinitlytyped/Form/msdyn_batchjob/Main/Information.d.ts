declare namespace Form.msdyn_batchjob.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_frequency"): Xrm.OptionSetAttribute<msdyn_batchjob_msdyn_frequency>;
      get(name: "msdyn_isactive"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_jobtype"): Xrm.OptionSetAttribute<msdyn_batchjob_msdyn_jobtype>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_frequency"): Xrm.OptionSetControl<msdyn_batchjob_msdyn_frequency>;
      get(name: "msdyn_isactive"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_jobtype"): Xrm.OptionSetControl<msdyn_batchjob_msdyn_jobtype>;
      get(name: "msdyn_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_frequency"): Xrm.OptionSetAttribute<msdyn_batchjob_msdyn_frequency>;
    getAttribute(attributeName: "msdyn_isactive"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_jobtype"): Xrm.OptionSetAttribute<msdyn_batchjob_msdyn_jobtype>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_frequency"): Xrm.OptionSetControl<msdyn_batchjob_msdyn_frequency>;
    getControl(controlName: "msdyn_isactive"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_jobtype"): Xrm.OptionSetControl<msdyn_batchjob_msdyn_jobtype>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
