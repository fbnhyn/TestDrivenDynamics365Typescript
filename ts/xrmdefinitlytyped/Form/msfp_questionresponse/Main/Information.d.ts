declare namespace Form.msfp_questionresponse.Main {
  namespace Information {
    namespace Tabs {
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "General"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msfp_keyphrases"): Xrm.Attribute<string>;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "msfp_questionid"): Xrm.LookupAttribute<"msfp_question">;
      get(name: "msfp_response"): Xrm.Attribute<string>;
      get(name: "msfp_sentimentvalue"): Xrm.NumberAttribute;
      get(name: "msfp_surveyresponseid"): Xrm.LookupAttribute<"msfp_surveyresponse">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msfp_keyphrases"): Xrm.StringControl;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "msfp_questionid"): Xrm.LookupControl<"msfp_question">;
      get(name: "msfp_response"): Xrm.StringControl;
      get(name: "msfp_sentimentvalue"): Xrm.NumberControl;
      get(name: "msfp_surveyresponseid"): Xrm.LookupControl<"msfp_surveyresponse">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_keyphrases"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_questionid"): Xrm.LookupAttribute<"msfp_question">;
    getAttribute(attributeName: "msfp_response"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_sentimentvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msfp_surveyresponseid"): Xrm.LookupAttribute<"msfp_surveyresponse">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msfp_keyphrases"): Xrm.StringControl;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "msfp_questionid"): Xrm.LookupControl<"msfp_question">;
    getControl(controlName: "msfp_response"): Xrm.StringControl;
    getControl(controlName: "msfp_sentimentvalue"): Xrm.NumberControl;
    getControl(controlName: "msfp_surveyresponseid"): Xrm.LookupControl<"msfp_surveyresponse">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
