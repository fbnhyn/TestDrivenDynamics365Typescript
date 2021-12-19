declare namespace Form.msdyusd_task.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyusd_category"): Xrm.LookupAttribute<"msdyusd_agentscripttaskcategory">;
      get(name: "msdyusd_instructions"): Xrm.Attribute<string>;
      get(name: "msdyusd_name"): Xrm.Attribute<string>;
      get(name: "msdyusd_scripttext"): Xrm.Attribute<string>;
      get(name: "msdyusd_showtab"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "msdyusd_starttask"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyusd_task_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Answers"): Xrm.SubGridControl<"msdyusd_answer">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyusd_task_statecode>;
      get(name: "msdyusd_category"): Xrm.LookupControl<"msdyusd_agentscripttaskcategory">;
      get(name: "msdyusd_instructions"): Xrm.StringControl;
      get(name: "msdyusd_name"): Xrm.StringControl;
      get(name: "msdyusd_scripttext"): Xrm.StringControl;
      get(name: "msdyusd_showtab"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "msdyusd_starttask"): Xrm.OptionSetControl<boolean>;
      get(name: "notescontrol"): Xrm.BaseControl;
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
    getAttribute(attributeName: "msdyusd_category"): Xrm.LookupAttribute<"msdyusd_agentscripttaskcategory">;
    getAttribute(attributeName: "msdyusd_instructions"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_scripttext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyusd_showtab"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "msdyusd_starttask"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyusd_task_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Answers"): Xrm.SubGridControl<"msdyusd_answer">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyusd_task_statecode>;
    getControl(controlName: "msdyusd_category"): Xrm.LookupControl<"msdyusd_agentscripttaskcategory">;
    getControl(controlName: "msdyusd_instructions"): Xrm.StringControl;
    getControl(controlName: "msdyusd_name"): Xrm.StringControl;
    getControl(controlName: "msdyusd_scripttext"): Xrm.StringControl;
    getControl(controlName: "msdyusd_showtab"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "msdyusd_starttask"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
