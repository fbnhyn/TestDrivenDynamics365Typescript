declare namespace Form.msdyn_playbookinstance.Main {
  namespace Information {
    namespace Tabs {
      interface _0a307c0396bd41f78800ebf2860aaa98 extends Xrm.SectionCollectionBase {
        get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_3"): Xrm.PageSection;
        get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_4"): Xrm.PageSection;
        get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}_section_5"): Xrm.PageSection;
        get(name: "{547dca32-5c99-4bf5-95d8-95ae479d4963}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_activitiesassociated"): Xrm.NumberAttribute;
      get(name: "msdyn_activitiesclosed"): Xrm.NumberAttribute;
      get(name: "msdyn_categoryid"): Xrm.LookupAttribute<"msdyn_playbookcategory">;
      get(name: "msdyn_estimatedclose"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_playbooktemplateid"): Xrm.LookupAttribute<"msdyn_playbooktemplate">;
      get(name: "msdyn_trackprogress"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "regarding"): Xrm.LookupAttribute<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_playbookinstance_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<msdyn_playbookinstance_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "PlaybookActivities"): Xrm.SubGridControl<"activitypointer">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<msdyn_playbookinstance_statecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<msdyn_playbookinstance_statuscode>;
      get(name: "msdyn_activitiesassociated"): Xrm.NumberControl;
      get(name: "msdyn_activitiesclosed"): Xrm.NumberControl;
      get(name: "msdyn_categoryid"): Xrm.LookupControl<"msdyn_playbookcategory">;
      get(name: "msdyn_estimatedclose"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_playbooktemplateid"): Xrm.LookupControl<"msdyn_playbooktemplate">;
      get(name: "msdyn_trackprogress"): Xrm.OptionSetControl<boolean>;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "regarding"): Xrm.LookupControl<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{0a307c03-96bd-41f7-8800-ebf2860aaa98}"): Xrm.PageTab<Tabs._0a307c0396bd41f78800ebf2860aaa98>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_activitiesassociated"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_activitiesclosed"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_categoryid"): Xrm.LookupAttribute<"msdyn_playbookcategory">;
    getAttribute(attributeName: "msdyn_estimatedclose"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_playbooktemplateid"): Xrm.LookupAttribute<"msdyn_playbooktemplate">;
    getAttribute(attributeName: "msdyn_trackprogress"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "regarding"): Xrm.LookupAttribute<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_playbookinstance_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<msdyn_playbookinstance_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "PlaybookActivities"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<msdyn_playbookinstance_statecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<msdyn_playbookinstance_statuscode>;
    getControl(controlName: "msdyn_activitiesassociated"): Xrm.NumberControl;
    getControl(controlName: "msdyn_activitiesclosed"): Xrm.NumberControl;
    getControl(controlName: "msdyn_categoryid"): Xrm.LookupControl<"msdyn_playbookcategory">;
    getControl(controlName: "msdyn_estimatedclose"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_playbooktemplateid"): Xrm.LookupControl<"msdyn_playbooktemplate">;
    getControl(controlName: "msdyn_trackprogress"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "regarding"): Xrm.LookupControl<"account" | "contact" | "invoice" | "lead" | "opportunity" | "quote" | "salesorder">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
