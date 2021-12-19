declare namespace Form.msdyn_smsnumber.Main {
  namespace Information {
    namespace Tabs {
      interface AutomatedMessages_tab extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Survey extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _47832bcee6f3451a890ea808029434d3 extends Xrm.SectionCollectionBase {
        get(name: "GeneralSetting_tab_WorkDistribution_section"): Xrm.PageSection;
        get(name: "{986bc67e-459f-44bb-9487-23c5724df2ee}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_formattedphonenumber"): Xrm.Attribute<string>;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
      get(name: "msdyn_number"): Xrm.Attribute<string>;
      get(name: "msdyn_ocwidgetlanguage"): Xrm.LookupAttribute<"msdyn_oclanguage">;
      get(name: "msdyn_operatinghourid"): Xrm.LookupAttribute<"msdyn_operatinghour">;
      get(name: "msdyn_postconversationsurvey"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "msdyn_postconversationsurveyenable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_postconversationsurveymessagetext"): Xrm.Attribute<string>;
      get(name: "msdyn_postconversationsurveymode"): Xrm.OptionSetAttribute<msdyn_postconversationsurveymode>;
      get(name: "msdyn_provider"): Xrm.OptionSetAttribute<msdyn_smsnumber_msdyn_provider>;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_smsnumber_msdyn_type>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
      get(name: "instance_CustomSystemMessage"): Xrm.BaseControl;
      get(name: "msdyn_FormsProButton"): Xrm.BaseControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_fileAttachmentsDisclaimer"): Xrm.BaseControl;
      get(name: "msdyn_formattedphonenumber"): Xrm.StringControl;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
      get(name: "msdyn_number"): Xrm.StringControl;
      get(name: "msdyn_ocwidgetlanguage"): Xrm.LookupControl<"msdyn_oclanguage">;
      get(name: "msdyn_operatinghourid"): Xrm.LookupControl<"msdyn_operatinghour">;
      get(name: "msdyn_postconversationsurvey"): Xrm.LookupControl<"msfp_survey">;
      get(name: "msdyn_postconversationsurveyenable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_postconversationsurveymessagetext"): Xrm.StringControl;
      get(name: "msdyn_postconversationsurveymode"): Xrm.OptionSetControl<msdyn_postconversationsurveymode>;
      get(name: "msdyn_provider"): Xrm.OptionSetControl<msdyn_smsnumber_msdyn_provider>;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_smsnumber_msdyn_type>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AutomatedMessages_tab"): Xrm.PageTab<Tabs.AutomatedMessages_tab>;
      get(name: "Survey"): Xrm.PageTab<Tabs.Survey>;
      get(name: "{47832bce-e6f3-451a-890e-a808029434d3}"): Xrm.PageTab<Tabs._47832bcee6f3451a890ea808029434d3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_formattedphonenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
    getAttribute(attributeName: "msdyn_number"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ocwidgetlanguage"): Xrm.LookupAttribute<"msdyn_oclanguage">;
    getAttribute(attributeName: "msdyn_operatinghourid"): Xrm.LookupAttribute<"msdyn_operatinghour">;
    getAttribute(attributeName: "msdyn_postconversationsurvey"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msdyn_postconversationsurveyenable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_postconversationsurveymessagetext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_postconversationsurveymode"): Xrm.OptionSetAttribute<msdyn_postconversationsurveymode>;
    getAttribute(attributeName: "msdyn_provider"): Xrm.OptionSetAttribute<msdyn_smsnumber_msdyn_provider>;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_smsnumber_msdyn_type>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "instance_CustomSystemMessage"): Xrm.BaseControl;
    getControl(controlName: "msdyn_FormsProButton"): Xrm.BaseControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_fileAttachmentsDisclaimer"): Xrm.BaseControl;
    getControl(controlName: "msdyn_formattedphonenumber"): Xrm.StringControl;
    getControl(controlName: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
    getControl(controlName: "msdyn_number"): Xrm.StringControl;
    getControl(controlName: "msdyn_ocwidgetlanguage"): Xrm.LookupControl<"msdyn_oclanguage">;
    getControl(controlName: "msdyn_operatinghourid"): Xrm.LookupControl<"msdyn_operatinghour">;
    getControl(controlName: "msdyn_postconversationsurvey"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "msdyn_postconversationsurveyenable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_postconversationsurveymessagetext"): Xrm.StringControl;
    getControl(controlName: "msdyn_postconversationsurveymode"): Xrm.OptionSetControl<msdyn_postconversationsurveymode>;
    getControl(controlName: "msdyn_provider"): Xrm.OptionSetControl<msdyn_smsnumber_msdyn_provider>;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_smsnumber_msdyn_type>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
