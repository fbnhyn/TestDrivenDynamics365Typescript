declare namespace Form.msdyn_project.QuickCreate {
  namespace CreateProject {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_actualend"): Xrm.DateAttribute | null;
      get(name: "msdyn_actualstart"): Xrm.DateAttribute | null;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_istemplate"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_plannedexpensecost"): Xrm.NumberAttribute;
      get(name: "msdyn_plannedhours"): Xrm.NumberAttribute;
      get(name: "msdyn_plannedlaborcost"): Xrm.NumberAttribute;
      get(name: "msdyn_projectmanager"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_projecttemplate"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_salesorderid"): Xrm.LookupAttribute<"salesorder">;
      get(name: "msdyn_scheduledend"): Xrm.DateAttribute;
      get(name: "msdyn_scheduledstart"): Xrm.DateAttribute;
      get(name: "msdyn_subject"): Xrm.Attribute<string>;
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
      get(name: "header_process_msdyn_actualend"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_actualend_1"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_actualstart"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
      get(name: "header_process_msdyn_scheduledend"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_scheduledstart"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_subject"): Xrm.StringControl | null;
      get(name: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_istemplate"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_plannedexpensecost"): Xrm.NumberControl;
      get(name: "msdyn_plannedhours"): Xrm.NumberControl;
      get(name: "msdyn_plannedlaborcost"): Xrm.NumberControl;
      get(name: "msdyn_projectmanager"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_projecttemplate"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_salesorderid"): Xrm.LookupControl<"salesorder">;
      get(name: "msdyn_scheduledend"): Xrm.DateControl;
      get(name: "msdyn_scheduledstart"): Xrm.DateControl;
      get(name: "msdyn_subject"): Xrm.StringControl;
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
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface CreateProject extends Xrm.PageBase<CreateProject.Attributes,CreateProject.Tabs,CreateProject.Controls> {
    getAttribute(attributeName: "msdyn_actualend"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "msdyn_actualstart"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "msdyn_contractorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_istemplate"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_plannedexpensecost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_plannedhours"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_plannedlaborcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_projectmanager"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_projecttemplate"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_salesorderid"): Xrm.LookupAttribute<"salesorder">;
    getAttribute(attributeName: "msdyn_scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_totalplannedcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_msdyn_actualend"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_actualend_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_actualstart"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
    getControl(controlName: "header_process_msdyn_scheduledend"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_scheduledstart"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_subject"): Xrm.StringControl | null;
    getControl(controlName: "msdyn_contractorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_istemplate"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_plannedexpensecost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_plannedhours"): Xrm.NumberControl;
    getControl(controlName: "msdyn_plannedlaborcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_projectmanager"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_projecttemplate"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_salesorderid"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "msdyn_scheduledend"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduledstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_subject"): Xrm.StringControl;
    getControl(controlName: "msdyn_totalplannedcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
