declare namespace Form.feedback.Main {
  namespace FeedbackMainIC {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Content"): Xrm.PageSection;
        get(name: "Content_2"): Xrm.PageSection;
        get(name: "General Info"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "closedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "closedon"): Xrm.DateAttribute;
      get(name: "comments"): Xrm.Attribute<string>;
      get(name: "createdby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "createdbycontact"): Xrm.LookupAttribute<"contact">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "maxrating"): Xrm.NumberAttribute;
      get(name: "minrating"): Xrm.NumberAttribute;
      get(name: "normalizedrating"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "rating"): Xrm.NumberAttribute;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"contact" | "feedback" | "knowledgearticle" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocoutboundmessage" | "msdyn_ocsession" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse">;
      get(name: "source"): Xrm.OptionSetAttribute<feedback_source>;
      get(name: "statecode"): Xrm.OptionSetAttribute<feedback_statecode>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<feedback_statuscode>;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "closedby"): Xrm.LookupControl<"systemuser">;
      get(name: "closedon"): Xrm.DateControl;
      get(name: "comments"): Xrm.StringControl;
      get(name: "createdby"): Xrm.LookupControl<"systemuser">;
      get(name: "createdbycontact"): Xrm.LookupControl<"contact">;
      get(name: "header_createdon"): Xrm.DateControl;
      get(name: "header_owner"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_state"): Xrm.OptionSetControl<feedback_statecode>;
      get(name: "header_status"): Xrm.OptionSetControl<feedback_statuscode>;
      get(name: "maxrating"): Xrm.NumberControl;
      get(name: "minrating"): Xrm.NumberControl;
      get(name: "normalizedrating"): Xrm.NumberControl;
      get(name: "rating"): Xrm.NumberControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"contact" | "feedback" | "knowledgearticle" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocoutboundmessage" | "msdyn_ocsession" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse">;
      get(name: "source"): Xrm.OptionSetControl<feedback_source>;
      get(name: "title"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FeedbackMainIC extends Xrm.PageBase<FeedbackMainIC.Attributes,FeedbackMainIC.Tabs,FeedbackMainIC.Controls> {
    getAttribute(attributeName: "closedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "closedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "comments"): Xrm.Attribute<string>;
    getAttribute(attributeName: "createdby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "createdbycontact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "maxrating"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minrating"): Xrm.NumberAttribute;
    getAttribute(attributeName: "normalizedrating"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "rating"): Xrm.NumberAttribute;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"contact" | "feedback" | "knowledgearticle" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocoutboundmessage" | "msdyn_ocsession" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse">;
    getAttribute(attributeName: "source"): Xrm.OptionSetAttribute<feedback_source>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<feedback_statecode>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<feedback_statuscode>;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "closedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "closedon"): Xrm.DateControl;
    getControl(controlName: "comments"): Xrm.StringControl;
    getControl(controlName: "createdby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "createdbycontact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "header_createdon"): Xrm.DateControl;
    getControl(controlName: "header_owner"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_state"): Xrm.OptionSetControl<feedback_statecode>;
    getControl(controlName: "header_status"): Xrm.OptionSetControl<feedback_statuscode>;
    getControl(controlName: "maxrating"): Xrm.NumberControl;
    getControl(controlName: "minrating"): Xrm.NumberControl;
    getControl(controlName: "normalizedrating"): Xrm.NumberControl;
    getControl(controlName: "rating"): Xrm.NumberControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"contact" | "feedback" | "knowledgearticle" | "msdyn_liveconversation" | "msdyn_ocliveworkitem" | "msdyn_ocoutboundmessage" | "msdyn_ocsession" | "msfp_alert" | "msfp_surveyinvite" | "msfp_surveyresponse">;
    getControl(controlName: "source"): Xrm.OptionSetControl<feedback_source>;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
