declare namespace Form.msdyn_fieldservicesystemjob.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_conditioncode"): Xrm.NumberAttribute;
      get(name: "msdyn_exceptionmessage"): Xrm.Attribute<string>;
      get(name: "msdyn_exceptiontrace"): Xrm.Attribute<string>;
      get(name: "msdyn_inputparameter"): Xrm.Attribute<string>;
      get(name: "msdyn_inputparametertype"): Xrm.OptionSetAttribute<msdyn_parametertype>;
      get(name: "msdyn_jobname"): Xrm.Attribute<string>;
      get(name: "msdyn_jobtype"): Xrm.NumberAttribute;
      get(name: "msdyn_outputparameter"): Xrm.Attribute<string>;
      get(name: "msdyn_outputparametertype"): Xrm.OptionSetAttribute<msdyn_parametertype>;
      get(name: "msdyn_ownerid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_fieldservicesystemjob_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_fieldservicesystemjob_statecode>;
      get(name: "msdyn_conditioncode"): Xrm.NumberControl;
      get(name: "msdyn_exceptionmessage"): Xrm.StringControl;
      get(name: "msdyn_exceptiontrace"): Xrm.StringControl;
      get(name: "msdyn_inputparameter"): Xrm.StringControl;
      get(name: "msdyn_inputparametertype"): Xrm.OptionSetControl<msdyn_parametertype>;
      get(name: "msdyn_jobname"): Xrm.StringControl;
      get(name: "msdyn_jobtype"): Xrm.NumberControl;
      get(name: "msdyn_outputparameter"): Xrm.StringControl;
      get(name: "msdyn_outputparametertype"): Xrm.OptionSetControl<msdyn_parametertype>;
      get(name: "msdyn_ownerid"): Xrm.LookupControl<"systemuser">;
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
    getAttribute(attributeName: "msdyn_conditioncode"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_exceptionmessage"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_exceptiontrace"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_inputparameter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_inputparametertype"): Xrm.OptionSetAttribute<msdyn_parametertype>;
    getAttribute(attributeName: "msdyn_jobname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_jobtype"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_outputparameter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_outputparametertype"): Xrm.OptionSetAttribute<msdyn_parametertype>;
    getAttribute(attributeName: "msdyn_ownerid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_fieldservicesystemjob_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_fieldservicesystemjob_statecode>;
    getControl(controlName: "msdyn_conditioncode"): Xrm.NumberControl;
    getControl(controlName: "msdyn_exceptionmessage"): Xrm.StringControl;
    getControl(controlName: "msdyn_exceptiontrace"): Xrm.StringControl;
    getControl(controlName: "msdyn_inputparameter"): Xrm.StringControl;
    getControl(controlName: "msdyn_inputparametertype"): Xrm.OptionSetControl<msdyn_parametertype>;
    getControl(controlName: "msdyn_jobname"): Xrm.StringControl;
    getControl(controlName: "msdyn_jobtype"): Xrm.NumberControl;
    getControl(controlName: "msdyn_outputparameter"): Xrm.StringControl;
    getControl(controlName: "msdyn_outputparametertype"): Xrm.OptionSetControl<msdyn_parametertype>;
    getControl(controlName: "msdyn_ownerid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
