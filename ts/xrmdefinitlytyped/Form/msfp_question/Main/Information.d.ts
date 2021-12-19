declare namespace Form.msfp_question.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "msfp_order"): Xrm.NumberAttribute;
      get(name: "msfp_questiontext"): Xrm.Attribute<string>;
      get(name: "msfp_questiontype"): Xrm.OptionSetAttribute<msfp_question_msfp_questiontype>;
      get(name: "msfp_responserequired"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
      get(name: "msfp_subtitle"): Xrm.Attribute<string>;
      get(name: "msfp_survey"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "msfp_order"): Xrm.NumberControl;
      get(name: "msfp_questiontext"): Xrm.StringControl;
      get(name: "msfp_questiontype"): Xrm.OptionSetControl<msfp_question_msfp_questiontype>;
      get(name: "msfp_responserequired"): Xrm.OptionSetControl<boolean>;
      get(name: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
      get(name: "msfp_subtitle"): Xrm.StringControl;
      get(name: "msfp_survey"): Xrm.LookupControl<"msfp_survey">;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_order"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msfp_questiontext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_questiontype"): Xrm.OptionSetAttribute<msfp_question_msfp_questiontype>;
    getAttribute(attributeName: "msfp_responserequired"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msfp_sourcesurveyidentifier"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_subtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_survey"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "msfp_order"): Xrm.NumberControl;
    getControl(controlName: "msfp_questiontext"): Xrm.StringControl;
    getControl(controlName: "msfp_questiontype"): Xrm.OptionSetControl<msfp_question_msfp_questiontype>;
    getControl(controlName: "msfp_responserequired"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msfp_sourcesurveyidentifier"): Xrm.StringControl;
    getControl(controlName: "msfp_subtitle"): Xrm.StringControl;
    getControl(controlName: "msfp_survey"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
