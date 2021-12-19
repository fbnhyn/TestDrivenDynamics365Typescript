declare namespace Form.uii_audit.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<uii_audit_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<uii_audit_statuscode>;
      get(name: "uii_actiondata"): Xrm.Attribute<string>;
      get(name: "uii_actionname"): Xrm.Attribute<string>;
      get(name: "uii_activityid"): Xrm.NumberAttribute;
      get(name: "uii_agentstate"): Xrm.Attribute<string>;
      get(name: "uii_applicationid"): Xrm.LookupAttribute<"uii_hostedapplication">;
      get(name: "uii_clienttimezone"): Xrm.NumberAttribute;
      get(name: "uii_contextid"): Xrm.Attribute<string>;
      get(name: "uii_currenttime"): Xrm.DateAttribute;
      get(name: "uii_customerid"): Xrm.Attribute<string>;
      get(name: "uii_machinename"): Xrm.Attribute<string>;
      get(name: "uii_name"): Xrm.Attribute<string>;
      get(name: "uii_targetapplication"): Xrm.Attribute<string>;
      get(name: "uii_workflowactivestepid"): Xrm.LookupAttribute<"uii_workflowstep">;
      get(name: "uii_workflowid"): Xrm.LookupAttribute<"uii_workflow">;
      get(name: "uii_workflowstatus"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<uii_audit_statecode>;
      get(name: "modifiedby"): Xrm.LookupControl<"systemuser">;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetControl<uii_audit_statecode>;
      get(name: "statuscode"): Xrm.OptionSetControl<uii_audit_statuscode>;
      get(name: "uii_actiondata"): Xrm.StringControl;
      get(name: "uii_actionname"): Xrm.StringControl;
      get(name: "uii_activityid"): Xrm.NumberControl;
      get(name: "uii_agentstate"): Xrm.StringControl;
      get(name: "uii_applicationid"): Xrm.LookupControl<"uii_hostedapplication">;
      get(name: "uii_clienttimezone"): Xrm.NumberControl;
      get(name: "uii_contextid"): Xrm.StringControl;
      get(name: "uii_currenttime"): Xrm.DateControl;
      get(name: "uii_customerid"): Xrm.StringControl;
      get(name: "uii_machinename"): Xrm.StringControl;
      get(name: "uii_name"): Xrm.StringControl;
      get(name: "uii_targetapplication"): Xrm.StringControl;
      get(name: "uii_workflowactivestepid"): Xrm.LookupControl<"uii_workflowstep">;
      get(name: "uii_workflowid"): Xrm.LookupControl<"uii_workflow">;
      get(name: "uii_workflowstatus"): Xrm.StringControl;
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
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<uii_audit_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<uii_audit_statuscode>;
    getAttribute(attributeName: "uii_actiondata"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_actionname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_activityid"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uii_agentstate"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_applicationid"): Xrm.LookupAttribute<"uii_hostedapplication">;
    getAttribute(attributeName: "uii_clienttimezone"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uii_contextid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_currenttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "uii_customerid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_machinename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_targetapplication"): Xrm.Attribute<string>;
    getAttribute(attributeName: "uii_workflowactivestepid"): Xrm.LookupAttribute<"uii_workflowstep">;
    getAttribute(attributeName: "uii_workflowid"): Xrm.LookupAttribute<"uii_workflow">;
    getAttribute(attributeName: "uii_workflowstatus"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<uii_audit_statecode>;
    getControl(controlName: "modifiedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statecode"): Xrm.OptionSetControl<uii_audit_statecode>;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<uii_audit_statuscode>;
    getControl(controlName: "uii_actiondata"): Xrm.StringControl;
    getControl(controlName: "uii_actionname"): Xrm.StringControl;
    getControl(controlName: "uii_activityid"): Xrm.NumberControl;
    getControl(controlName: "uii_agentstate"): Xrm.StringControl;
    getControl(controlName: "uii_applicationid"): Xrm.LookupControl<"uii_hostedapplication">;
    getControl(controlName: "uii_clienttimezone"): Xrm.NumberControl;
    getControl(controlName: "uii_contextid"): Xrm.StringControl;
    getControl(controlName: "uii_currenttime"): Xrm.DateControl;
    getControl(controlName: "uii_customerid"): Xrm.StringControl;
    getControl(controlName: "uii_machinename"): Xrm.StringControl;
    getControl(controlName: "uii_name"): Xrm.StringControl;
    getControl(controlName: "uii_targetapplication"): Xrm.StringControl;
    getControl(controlName: "uii_workflowactivestepid"): Xrm.LookupControl<"uii_workflowstep">;
    getControl(controlName: "uii_workflowid"): Xrm.LookupControl<"uii_workflow">;
    getControl(controlName: "uii_workflowstatus"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
