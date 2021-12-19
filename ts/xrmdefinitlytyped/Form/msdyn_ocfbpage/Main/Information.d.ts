declare namespace Form.msdyn_ocfbpage.Main {
  namespace Information {
    namespace Tabs {
      interface AutomatedMessages_tab extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface GeneralSetting_tab extends Xrm.SectionCollectionBase {
        get(name: "GeneralSetting_tab_GeneralInformation_section"): Xrm.PageSection;
        get(name: "GeneralSetting_tab_HumanTag_section"): Xrm.PageSection;
        get(name: "{a4e06c8c-0983-456c-b7fb-058ab37389b7}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Survey extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _6f4897ef98564d54a0ae46efcdcdb658 extends Xrm.SectionCollectionBase {
        get(name: "{6f4897ef-9856-4d54-a0ae-46efcdcdb658}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablehumanagenttag"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_fbpageaccesstoken"): Xrm.Attribute<string>;
      get(name: "msdyn_fbpageid"): Xrm.Attribute<string>;
      get(name: "msdyn_fbpagename"): Xrm.Attribute<string>;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
      get(name: "msdyn_ocfbapplicationid"): Xrm.LookupAttribute<"msdyn_ocfbapplication">;
      get(name: "msdyn_ocwidgetlanguage"): Xrm.LookupAttribute<"msdyn_oclanguage">;
      get(name: "msdyn_postconversationsurvey"): Xrm.LookupAttribute<"msfp_survey">;
      get(name: "msdyn_postconversationsurveyenable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_postconversationsurveymessagetext"): Xrm.Attribute<string>;
      get(name: "msdyn_postconversationsurveymode"): Xrm.OptionSetAttribute<msdyn_postconversationsurveymode>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ProvisioningHistory"): Xrm.SubGridControl<"msdyn_ocprovisioningstate">;
      get(name: "WebResource_FBHumanAgentTagDisclaimer"): Xrm.WebResourceControl;
      get(name: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
      get(name: "instance_CustomSystemMessage"): Xrm.BaseControl;
      get(name: "msdyn_FormsProButton"): Xrm.BaseControl;
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablehumanagenttag"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_fbpageaccesstoken"): Xrm.StringControl;
      get(name: "msdyn_fbpageid"): Xrm.StringControl;
      get(name: "msdyn_fbpagename"): Xrm.StringControl;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
      get(name: "msdyn_ocfbapplicationid"): Xrm.LookupControl<"msdyn_ocfbapplication">;
      get(name: "msdyn_ocwidgetlanguage"): Xrm.LookupControl<"msdyn_oclanguage">;
      get(name: "msdyn_postconversationsurvey"): Xrm.LookupControl<"msfp_survey">;
      get(name: "msdyn_postconversationsurveyenable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_postconversationsurveymessagetext"): Xrm.StringControl;
      get(name: "msdyn_postconversationsurveymode"): Xrm.OptionSetControl<msdyn_postconversationsurveymode>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AutomatedMessages_tab"): Xrm.PageTab<Tabs.AutomatedMessages_tab>;
      get(name: "GeneralSetting_tab"): Xrm.PageTab<Tabs.GeneralSetting_tab>;
      get(name: "Survey"): Xrm.PageTab<Tabs.Survey>;
      get(name: "{6f4897ef-9856-4d54-a0ae-46efcdcdb658}"): Xrm.PageTab<Tabs._6f4897ef98564d54a0ae46efcdcdb658>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablehumanagenttag"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_fbpageaccesstoken"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fbpageid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fbpagename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
    getAttribute(attributeName: "msdyn_ocfbapplicationid"): Xrm.LookupAttribute<"msdyn_ocfbapplication">;
    getAttribute(attributeName: "msdyn_ocwidgetlanguage"): Xrm.LookupAttribute<"msdyn_oclanguage">;
    getAttribute(attributeName: "msdyn_postconversationsurvey"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msdyn_postconversationsurveyenable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_postconversationsurveymessagetext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_postconversationsurveymode"): Xrm.OptionSetAttribute<msdyn_postconversationsurveymode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ProvisioningHistory"): Xrm.SubGridControl<"msdyn_ocprovisioningstate">;
    getControl(controlName: "WebResource_FBHumanAgentTagDisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "instance_CustomSystemMessage"): Xrm.BaseControl;
    getControl(controlName: "msdyn_FormsProButton"): Xrm.BaseControl;
    getControl(controlName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablehumanagenttag"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_fbpageaccesstoken"): Xrm.StringControl;
    getControl(controlName: "msdyn_fbpageid"): Xrm.StringControl;
    getControl(controlName: "msdyn_fbpagename"): Xrm.StringControl;
    getControl(controlName: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
    getControl(controlName: "msdyn_ocfbapplicationid"): Xrm.LookupControl<"msdyn_ocfbapplication">;
    getControl(controlName: "msdyn_ocwidgetlanguage"): Xrm.LookupControl<"msdyn_oclanguage">;
    getControl(controlName: "msdyn_postconversationsurvey"): Xrm.LookupControl<"msfp_survey">;
    getControl(controlName: "msdyn_postconversationsurveyenable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_postconversationsurveymessagetext"): Xrm.StringControl;
    getControl(controlName: "msdyn_postconversationsurveymode"): Xrm.OptionSetControl<msdyn_postconversationsurveymode>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
