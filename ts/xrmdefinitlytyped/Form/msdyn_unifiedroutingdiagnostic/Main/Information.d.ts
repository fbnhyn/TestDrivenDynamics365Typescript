declare namespace Form.msdyn_unifiedroutingdiagnostic.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_completedon"): Xrm.DateAttribute;
      get(name: "msdyn_decisionrulesetid"): Xrm.LookupAttribute<"msdyn_decisionruleset">;
      get(name: "msdyn_evaluation"): Xrm.Attribute<string>;
      get(name: "msdyn_inputdata"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_outputdata"): Xrm.Attribute<string>;
      get(name: "msdyn_ruletype"): Xrm.OptionSetAttribute<msdyn_unifiedroutingdiagnostic_msdyn_ruletype>;
      get(name: "msdyn_startedon"): Xrm.DateAttribute;
      get(name: "msdyn_targetobject"): Xrm.LookupAttribute<"msdyn_ocliveworkitem" | "queueitem">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_completedon"): Xrm.DateControl;
      get(name: "msdyn_decisionrulesetid"): Xrm.LookupControl<"msdyn_decisionruleset">;
      get(name: "msdyn_evaluation"): Xrm.StringControl;
      get(name: "msdyn_inputdata"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_outputdata"): Xrm.StringControl;
      get(name: "msdyn_ruletype"): Xrm.OptionSetControl<msdyn_unifiedroutingdiagnostic_msdyn_ruletype>;
      get(name: "msdyn_startedon"): Xrm.DateControl;
      get(name: "msdyn_targetobject"): Xrm.LookupControl<"msdyn_ocliveworkitem" | "queueitem">;
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
    getAttribute(attributeName: "msdyn_completedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_decisionrulesetid"): Xrm.LookupAttribute<"msdyn_decisionruleset">;
    getAttribute(attributeName: "msdyn_evaluation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_inputdata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_outputdata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ruletype"): Xrm.OptionSetAttribute<msdyn_unifiedroutingdiagnostic_msdyn_ruletype>;
    getAttribute(attributeName: "msdyn_startedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_targetobject"): Xrm.LookupAttribute<"msdyn_ocliveworkitem" | "queueitem">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_completedon"): Xrm.DateControl;
    getControl(controlName: "msdyn_decisionrulesetid"): Xrm.LookupControl<"msdyn_decisionruleset">;
    getControl(controlName: "msdyn_evaluation"): Xrm.StringControl;
    getControl(controlName: "msdyn_inputdata"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_outputdata"): Xrm.StringControl;
    getControl(controlName: "msdyn_ruletype"): Xrm.OptionSetControl<msdyn_unifiedroutingdiagnostic_msdyn_ruletype>;
    getControl(controlName: "msdyn_startedon"): Xrm.DateControl;
    getControl(controlName: "msdyn_targetobject"): Xrm.LookupControl<"msdyn_ocliveworkitem" | "queueitem">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
