declare namespace Form.msdyn_project.Main {
  namespace Information {
    namespace Tabs {
      interface Assignments_Tab extends Xrm.SectionCollectionBase {
        get(name: "Assignments_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Estimates_Tab extends Xrm.SectionCollectionBase {
        get(name: "Estimates_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Expense_Estimates_Tab extends Xrm.SectionCollectionBase {
        get(name: "Expense_Estimates_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Reconciliation_Tab extends Xrm.SectionCollectionBase {
        get(name: "Reconciliation_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Sales extends Xrm.SectionCollectionBase {
        get(name: "Sales"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Schedule_Tab extends Xrm.SectionCollectionBase {
        get(name: "Schedule_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Status extends Xrm.SectionCollectionBase {
        get(name: "Status_section_1"): Xrm.PageSection;
        get(name: "Status_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "{31843965-2614-4dec-b525-872d76e16b92}"): Xrm.PageSection;
        get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_4"): Xrm.PageSection;
        get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Team extends Xrm.SectionCollectionBase {
        get(name: "{ac4158d2-008d-4b6d-8e11-58c9ab47b14b}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Tracking_Tab extends Xrm.SectionCollectionBase {
        get(name: "Tracking_Section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_actualend"): Xrm.DateAttribute;
      get(name: "msdyn_actualexpensecost"): Xrm.NumberAttribute;
      get(name: "msdyn_actualhours"): Xrm.NumberAttribute;
      get(name: "msdyn_actuallaborcost"): Xrm.NumberAttribute;
      get(name: "msdyn_actualstart"): Xrm.DateAttribute;
      get(name: "msdyn_comments"): Xrm.Attribute<string>;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_costconsumption"): Xrm.NumberAttribute;
      get(name: "msdyn_costperformence"): Xrm.OptionSetAttribute<msdyn_project_msdyn_costperformence>;
      get(name: "msdyn_customer"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_istemplate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_overallprojectstatus"): Xrm.OptionSetAttribute<msdyn_project_msdyn_overallprojectstatus>;
      get(name: "msdyn_plannedexpensecost"): Xrm.NumberAttribute;
      get(name: "msdyn_plannedhours"): Xrm.NumberAttribute;
      get(name: "msdyn_plannedlaborcost"): Xrm.NumberAttribute;
      get(name: "msdyn_progress"): Xrm.NumberAttribute;
      get(name: "msdyn_projectmanager"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_projecttemplate"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_salesorderid"): Xrm.LookupAttribute<"salesorder"> | null;
      get(name: "msdyn_scheduledend"): Xrm.DateAttribute;
      get(name: "msdyn_scheduledstart"): Xrm.DateAttribute;
      get(name: "msdyn_scheduleperformance"): Xrm.OptionSetAttribute<msdyn_project_msdyn_scheduleperformance>;
      get(name: "msdyn_statusupdatedon"): Xrm.DateAttribute;
      get(name: "msdyn_subject"): Xrm.Attribute<string>;
      get(name: "msdyn_totalactualcost"): Xrm.NumberAttribute;
      get(name: "msdyn_totalplannedcost"): Xrm.NumberAttribute;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Assignments"): Xrm.BaseControl;
      get(name: "Estimates"): Xrm.BaseControl;
      get(name: "ExpenseEstimates"): Xrm.BaseControl;
      get(name: "ProjectContract"): Xrm.SubGridControl<"salesorderdetail">;
      get(name: "ProjectQuote"): Xrm.SubGridControl<"quotedetail">;
      get(name: "Reconciliation"): Xrm.BaseControl;
      get(name: "Schedule"): Xrm.BaseControl;
      get(name: "SchedulePerformanceCost"): Xrm.SubGridControl<"msdyn_projecttask">;
      get(name: "SchedulePerformanceEffort"): Xrm.SubGridControl<"msdyn_projecttask">;
      get(name: "SubGrid_TeamMember"): Xrm.BaseControl;
      get(name: "Tracking"): Xrm.BaseControl;
      get(name: "header_msdyn_costconsumption"): Xrm.NumberControl;
      get(name: "header_msdyn_plannedlaborcost"): Xrm.NumberControl;
      get(name: "header_msdyn_progress"): Xrm.NumberControl;
      get(name: "header_process_msdyn_actualend"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_actualend_1"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_actualstart"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
      get(name: "header_process_msdyn_scheduledend"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_scheduledstart"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_subject"): Xrm.StringControl | null;
      get(name: "header_scheduledend"): Xrm.DateControl;
      get(name: "msdyn_actualend"): Xrm.DateControl;
      get(name: "msdyn_actualexpensecost"): Xrm.NumberControl;
      get(name: "msdyn_actualhours"): Xrm.NumberControl;
      get(name: "msdyn_actuallaborcost"): Xrm.NumberControl;
      get(name: "msdyn_actualstart"): Xrm.DateControl;
      get(name: "msdyn_comments"): Xrm.StringControl;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_costperformence"): Xrm.OptionSetControl<msdyn_project_msdyn_costperformence>;
      get(name: "msdyn_customer"): Xrm.LookupControl<"account">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_istemplate"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_overallprojectstatus"): Xrm.OptionSetControl<msdyn_project_msdyn_overallprojectstatus>;
      get(name: "msdyn_plannedexpensecost"): Xrm.NumberControl;
      get(name: "msdyn_plannedhours"): Xrm.NumberControl;
      get(name: "msdyn_plannedlaborcost"): Xrm.NumberControl;
      get(name: "msdyn_projectmanager"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_projecttemplate"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_projecttemplate1"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_scheduledend"): Xrm.DateControl;
      get(name: "msdyn_scheduledstart"): Xrm.DateControl;
      get(name: "msdyn_scheduleperformance"): Xrm.OptionSetControl<msdyn_project_msdyn_scheduleperformance>;
      get(name: "msdyn_statusupdatedon"): Xrm.DateControl;
      get(name: "msdyn_subject"): Xrm.StringControl;
      get(name: "msdyn_totalactualcost"): Xrm.NumberControl;
      get(name: "msdyn_totalplannedcost"): Xrm.NumberControl;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Assignments_Tab"): Xrm.PageTab<Tabs.Assignments_Tab>;
      get(name: "Estimates_Tab"): Xrm.PageTab<Tabs.Estimates_Tab>;
      get(name: "Expense_Estimates_Tab"): Xrm.PageTab<Tabs.Expense_Estimates_Tab>;
      get(name: "Reconciliation_Tab"): Xrm.PageTab<Tabs.Reconciliation_Tab>;
      get(name: "Sales"): Xrm.PageTab<Tabs.Sales>;
      get(name: "Schedule_Tab"): Xrm.PageTab<Tabs.Schedule_Tab>;
      get(name: "Status"): Xrm.PageTab<Tabs.Status>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: "Team"): Xrm.PageTab<Tabs.Team>;
      get(name: "Tracking_Tab"): Xrm.PageTab<Tabs.Tracking_Tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_actualend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_actualexpensecost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_actualhours"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_actuallaborcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_actualstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_comments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_costconsumption"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_costperformence"): Xrm.OptionSetAttribute<msdyn_project_msdyn_costperformence>;
    getAttribute(attributeName: "msdyn_customer"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_istemplate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_overallprojectstatus"): Xrm.OptionSetAttribute<msdyn_project_msdyn_overallprojectstatus>;
    getAttribute(attributeName: "msdyn_plannedexpensecost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_plannedhours"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_plannedlaborcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_progress"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_projectmanager"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_projecttemplate"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_salesorderid"): Xrm.LookupAttribute<"salesorder"> | null;
    getAttribute(attributeName: "msdyn_scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduleperformance"): Xrm.OptionSetAttribute<msdyn_project_msdyn_scheduleperformance>;
    getAttribute(attributeName: "msdyn_statusupdatedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_totalactualcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalplannedcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Assignments"): Xrm.BaseControl;
    getControl(controlName: "Estimates"): Xrm.BaseControl;
    getControl(controlName: "ExpenseEstimates"): Xrm.BaseControl;
    getControl(controlName: "ProjectContract"): Xrm.SubGridControl<"salesorderdetail">;
    getControl(controlName: "ProjectQuote"): Xrm.SubGridControl<"quotedetail">;
    getControl(controlName: "Reconciliation"): Xrm.BaseControl;
    getControl(controlName: "Schedule"): Xrm.BaseControl;
    getControl(controlName: "SchedulePerformanceCost"): Xrm.SubGridControl<"msdyn_projecttask">;
    getControl(controlName: "SchedulePerformanceEffort"): Xrm.SubGridControl<"msdyn_projecttask">;
    getControl(controlName: "SubGrid_TeamMember"): Xrm.BaseControl;
    getControl(controlName: "Tracking"): Xrm.BaseControl;
    getControl(controlName: "header_msdyn_costconsumption"): Xrm.NumberControl;
    getControl(controlName: "header_msdyn_plannedlaborcost"): Xrm.NumberControl;
    getControl(controlName: "header_msdyn_progress"): Xrm.NumberControl;
    getControl(controlName: "header_process_msdyn_actualend"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_actualend_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_actualstart"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
    getControl(controlName: "header_process_msdyn_scheduledend"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_scheduledstart"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_subject"): Xrm.StringControl | null;
    getControl(controlName: "header_scheduledend"): Xrm.DateControl;
    getControl(controlName: "msdyn_actualend"): Xrm.DateControl;
    getControl(controlName: "msdyn_actualexpensecost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_actualhours"): Xrm.NumberControl;
    getControl(controlName: "msdyn_actuallaborcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_actualstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_comments"): Xrm.StringControl;
    getControl(controlName: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_costperformence"): Xrm.OptionSetControl<msdyn_project_msdyn_costperformence>;
    getControl(controlName: "msdyn_customer"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_istemplate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_overallprojectstatus"): Xrm.OptionSetControl<msdyn_project_msdyn_overallprojectstatus>;
    getControl(controlName: "msdyn_plannedexpensecost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_plannedhours"): Xrm.NumberControl;
    getControl(controlName: "msdyn_plannedlaborcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_projectmanager"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_projecttemplate"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_projecttemplate1"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_scheduledend"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduledstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduleperformance"): Xrm.OptionSetControl<msdyn_project_msdyn_scheduleperformance>;
    getControl(controlName: "msdyn_statusupdatedon"): Xrm.DateControl;
    getControl(controlName: "msdyn_subject"): Xrm.StringControl;
    getControl(controlName: "msdyn_totalactualcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totalplannedcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
