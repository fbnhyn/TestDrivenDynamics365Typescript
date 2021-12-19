declare namespace Form.msfp_survey.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msfp_acceptanonymousresponses"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msfp_description"): Xrm.Attribute<string>;
      get(name: "msfp_friendlyname"): Xrm.Attribute<string>;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "msfp_otherproperties"): Xrm.Attribute<string>;
      get(name: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
      get(name: "msfp_sourcesurveymodifieddate"): Xrm.DateAttribute;
      get(name: "msfp_surveyurl"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "modifiedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msfp_acceptanonymousresponses"): Xrm.OptionSetControl<boolean>;
      get(name: "msfp_description"): Xrm.StringControl;
      get(name: "msfp_friendlyname"): Xrm.StringControl;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "msfp_otherproperties"): Xrm.StringControl;
      get(name: "msfp_project"): Xrm.LookupControl<"msfp_project">;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
      get(name: "msfp_sourcesurveymodifieddate"): Xrm.DateControl;
      get(name: "msfp_surveyurl"): Xrm.StringControl;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msfp_acceptanonymousresponses"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msfp_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_friendlyname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_otherproperties"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
    getAttribute(attributeName: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_sourcesurveymodifieddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_surveyurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "modifiedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msfp_acceptanonymousresponses"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msfp_description"): Xrm.StringControl;
    getControl(controlName: "msfp_friendlyname"): Xrm.StringControl;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "msfp_otherproperties"): Xrm.StringControl;
    getControl(controlName: "msfp_project"): Xrm.LookupControl<"msfp_project">;
    getControl(controlName: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
    getControl(controlName: "msfp_sourcesurveymodifieddate"): Xrm.DateControl;
    getControl(controlName: "msfp_surveyurl"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
