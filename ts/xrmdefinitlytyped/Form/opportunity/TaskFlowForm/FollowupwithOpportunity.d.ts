declare namespace Form.opportunity.TaskFlowForm {
  namespace FollowupwithOpportunity {
    namespace Tabs {
      interface step_2 extends Xrm.SectionCollectionBase {
        get(name: "step_2_section1"): Xrm.PageSection;
        get(name: "step_2_section2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "23d2b546-71c3-4245-8fb3-1addbeda5fc6_next"): Xrm.Attribute<any>;
      get(name: "budgetamount"): Xrm.NumberAttribute | null;
      get(name: "completefinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "completeinternalreview"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "currentsituation"): Xrm.Attribute<string>;
      get(name: "customerneed"): Xrm.Attribute<string>;
      get(name: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "developproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "filedebrief"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "finaldecisiondate"): Xrm.DateAttribute | null;
      get(name: "identifycompetitors"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account">;
      get(name: "parentcontactid"): Xrm.LookupAttribute<"contact">;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<number>;
      get(name: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "presentproposal"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "proposedsolution"): Xrm.Attribute<string> | null;
      get(name: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
      get(name: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
      get(name: "sendthankyounote"): Xrm.OptionSetAttribute<boolean> | null;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "23d2b546-71c3-4245-8fb3-1addbeda5fc6_next"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "Section2Label"): Xrm.BaseControl;
      get(name: "currentsituation"): Xrm.StringControl;
      get(name: "customerneed"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_process_budgetamount"): Xrm.NumberControl | null;
      get(name: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completefinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_completeinternalreview_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_currentsituation"): Xrm.StringControl | null;
      get(name: "header_process_customerneed"): Xrm.StringControl | null;
      get(name: "header_process_customerneed_1"): Xrm.StringControl | null;
      get(name: "header_process_customerneed_2"): Xrm.StringControl | null;
      get(name: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_description"): Xrm.StringControl | null;
      get(name: "header_process_description_1"): Xrm.StringControl | null;
      get(name: "header_process_developproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_developproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_filedebrief"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_filedebrief_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_finaldecisiondate"): Xrm.DateControl | null;
      get(name: "header_process_finaldecisiondate_1"): Xrm.DateControl | null;
      get(name: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycompetitors_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifycustomercontacts_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_identifypursuitteam_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentaccountid_1"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
      get(name: "header_process_parentcontactid_1"): Xrm.LookupControl<"contact"> | null;
      get(name: "header_process_preferredcontactmethodcode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentfinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentproposal"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_presentproposal_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_proposedsolution"): Xrm.StringControl | null;
      get(name: "header_process_proposedsolution_1"): Xrm.StringControl | null;
      get(name: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
      get(name: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
      get(name: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_sendthankyounote_1"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "name"): Xrm.StringControl;
      get(name: "opportunity_parent_contact:emailaddress1"): Xrm.StringControl;
      get(name: "opportunity_parent_contact:mobilephone"): Xrm.StringControl;
      get(name: "opportunity_parent_contact:preferredcontactmethodcode"): Xrm.OptionSetControl<number>;
      get(name: "opportunity_parent_contact:telephone1"): Xrm.StringControl;
      get(name: "parentaccountid"): Xrm.LookupControl<"account">;
      get(name: "parentcontactid"): Xrm.LookupControl<"contact">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "step_2"): Xrm.PageTab<Tabs.step_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FollowupwithOpportunity extends Xrm.PageBase<FollowupwithOpportunity.Attributes,FollowupwithOpportunity.Tabs,FollowupwithOpportunity.Controls> {
    getAttribute(attributeName: "23d2b546-71c3-4245-8fb3-1addbeda5fc6_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "budgetamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "completefinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "completeinternalreview"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "currentsituation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerneed"): Xrm.Attribute<string>;
    getAttribute(attributeName: "decisionmaker"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "developproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "filedebrief"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "finaldecisiondate"): Xrm.DateAttribute | null;
    getAttribute(attributeName: "identifycompetitors"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "identifycustomercontacts"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "identifypursuitteam"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "parentcontactid"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<number>;
    getAttribute(attributeName: "presentfinalproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "presentproposal"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "proposedsolution"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "purchaseprocess"): Xrm.OptionSetAttribute<purchaseprocess> | null;
    getAttribute(attributeName: "purchasetimeframe"): Xrm.OptionSetAttribute<purchasetimeframe> | null;
    getAttribute(attributeName: "sendthankyounote"): Xrm.OptionSetAttribute<boolean> | null;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "23d2b546-71c3-4245-8fb3-1addbeda5fc6_next"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "Section2Label"): Xrm.BaseControl;
    getControl(controlName: "currentsituation"): Xrm.StringControl;
    getControl(controlName: "customerneed"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_process_budgetamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_completefinalproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completefinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completeinternalreview"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_completeinternalreview_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_currentsituation"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_customerneed_2"): Xrm.StringControl | null;
    getControl(controlName: "header_process_decisionmaker"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_description_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_developproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_developproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_filedebrief"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_filedebrief_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_finaldecisiondate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_finaldecisiondate_1"): Xrm.DateControl | null;
    getControl(controlName: "header_process_identifycompetitors"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycompetitors_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycustomercontacts"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifycustomercontacts_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifypursuitteam"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_identifypursuitteam_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentaccountid_1"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_parentcontactid"): Xrm.LookupControl<"opportunity"> | null;
    getControl(controlName: "header_process_parentcontactid_1"): Xrm.LookupControl<"contact"> | null;
    getControl(controlName: "header_process_preferredcontactmethodcode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_presentfinalproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentfinalproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentproposal"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_presentproposal_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_proposedsolution"): Xrm.StringControl | null;
    getControl(controlName: "header_process_proposedsolution_1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_purchaseprocess"): Xrm.OptionSetControl<purchaseprocess> | null;
    getControl(controlName: "header_process_purchasetimeframe"): Xrm.OptionSetControl<purchasetimeframe> | null;
    getControl(controlName: "header_process_sendthankyounote"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_sendthankyounote_1"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "opportunity_parent_contact:emailaddress1"): Xrm.StringControl;
    getControl(controlName: "opportunity_parent_contact:mobilephone"): Xrm.StringControl;
    getControl(controlName: "opportunity_parent_contact:preferredcontactmethodcode"): Xrm.OptionSetControl<number>;
    getControl(controlName: "opportunity_parent_contact:telephone1"): Xrm.StringControl;
    getControl(controlName: "parentaccountid"): Xrm.LookupControl<"account">;
    getControl(controlName: "parentcontactid"): Xrm.LookupControl<"contact">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
