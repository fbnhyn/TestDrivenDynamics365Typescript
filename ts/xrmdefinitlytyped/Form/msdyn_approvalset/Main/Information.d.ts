declare namespace Form.msdyn_approvalset.Main {
  namespace Information {
    namespace Tabs {
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_actiontype"): Xrm.OptionSetAttribute<msdyn_approvalaction>;
      get(name: "msdyn_approver"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_entrytype"): Xrm.OptionSetAttribute<msdyn_approvalentrytype>;
      get(name: "msdyn_lifetime"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_systemjobid"): Xrm.Attribute<string>;
      get(name: "msdyn_targetstatus"): Xrm.OptionSetAttribute<msdyn_approvalentrystatus>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_approvalset_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ProjectApprovalsSubGrid"): Xrm.SubGridControl<"msdyn_projectapproval">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msdyn_actiontype"): Xrm.OptionSetControl<msdyn_approvalaction>;
      get(name: "msdyn_approver"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_entrytype"): Xrm.OptionSetControl<msdyn_approvalentrytype>;
      get(name: "msdyn_lifetime"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_systemjobid"): Xrm.StringControl;
      get(name: "msdyn_targetstatus"): Xrm.OptionSetControl<msdyn_approvalentrystatus>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetControl<msdyn_approvalset_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_actiontype"): Xrm.OptionSetAttribute<msdyn_approvalaction>;
    getAttribute(attributeName: "msdyn_approver"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_entrytype"): Xrm.OptionSetAttribute<msdyn_approvalentrytype>;
    getAttribute(attributeName: "msdyn_lifetime"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_systemjobid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_targetstatus"): Xrm.OptionSetAttribute<msdyn_approvalentrystatus>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_approvalset_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ProjectApprovalsSubGrid"): Xrm.SubGridControl<"msdyn_projectapproval">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msdyn_actiontype"): Xrm.OptionSetControl<msdyn_approvalaction>;
    getControl(controlName: "msdyn_approver"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_entrytype"): Xrm.OptionSetControl<msdyn_approvalentrytype>;
    getControl(controlName: "msdyn_lifetime"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_systemjobid"): Xrm.StringControl;
    getControl(controlName: "msdyn_targetstatus"): Xrm.OptionSetControl<msdyn_approvalentrystatus>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msdyn_approvalset_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
