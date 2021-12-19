declare namespace Form.msdyn_journal.Main {
  namespace Information {
    namespace Tabs {
      interface ExpenseCorrectionsTab extends Xrm.SectionCollectionBase {
        get(name: "ExpenseCorrectionParameters"): Xrm.PageSection;
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface JounalLinesTab extends Xrm.SectionCollectionBase {
        get(name: "JournalLinesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface TimeEntryCorrectionsTab extends Xrm.SectionCollectionBase {
        get(name: "TimeEntryCorrectionParameters"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _89b13559b90e4eaaa6be47e4ebb36524 extends Xrm.SectionCollectionBase {
        get(name: "{89b13559-b90e-4eaa-a6be-47e4ebb36524}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_date"): Xrm.DateAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_expensecategory"): Xrm.LookupAttribute<"msdyn_expensecategory">;
      get(name: "msdyn_isposted"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_journal_msdyn_journaltype>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_transactiondate"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_journal_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Expenses"): Xrm.SubGridControl<"msdyn_expense">;
      get(name: "JournalLinesGrid"): Xrm.SubGridControl<"msdyn_journalline">;
      get(name: "TimeEntries"): Xrm.SubGridControl<"msdyn_timeentry">;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_bookableresource1"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_date"): Xrm.DateControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_expensecategory"): Xrm.LookupControl<"msdyn_expensecategory">;
      get(name: "msdyn_isposted"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_journal_msdyn_journaltype>;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_project1"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_transactiondate"): Xrm.DateControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetControl<msdyn_journal_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ExpenseCorrectionsTab"): Xrm.PageTab<Tabs.ExpenseCorrectionsTab>;
      get(name: "JounalLinesTab"): Xrm.PageTab<Tabs.JounalLinesTab>;
      get(name: "TimeEntryCorrectionsTab"): Xrm.PageTab<Tabs.TimeEntryCorrectionsTab>;
      get(name: "{89b13559-b90e-4eaa-a6be-47e4ebb36524}"): Xrm.PageTab<Tabs._89b13559b90e4eaaa6be47e4ebb36524>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_expensecategory"): Xrm.LookupAttribute<"msdyn_expensecategory">;
    getAttribute(attributeName: "msdyn_isposted"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_journal_msdyn_journaltype>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_transactiondate"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_journal_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Expenses"): Xrm.SubGridControl<"msdyn_expense">;
    getControl(controlName: "JournalLinesGrid"): Xrm.SubGridControl<"msdyn_journalline">;
    getControl(controlName: "TimeEntries"): Xrm.SubGridControl<"msdyn_timeentry">;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_bookableresource1"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_date"): Xrm.DateControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_expensecategory"): Xrm.LookupControl<"msdyn_expensecategory">;
    getControl(controlName: "msdyn_isposted"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_journal_msdyn_journaltype>;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_project1"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_transactiondate"): Xrm.DateControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<msdyn_journal_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
