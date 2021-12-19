declare namespace Form.msdyn_octwitterhandle.Main {
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
        get(name: "GeneralSetting_tab_fileattachment_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface eb2b87349d0a421f9076ba13303c27f6 extends Xrm.SectionCollectionBase {
        get(name: "{bd72c452-4d7e-4715-956f-bc8e4e5c719d}"): Xrm.PageSection;
        get(name: "{eb2b8734-9d0a-421f-9076-ba13303c27f6}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface survey_tab_1 extends Xrm.SectionCollectionBase {
        get(name: "Survey_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_octwitterapplicationid"): Xrm.LookupAttribute<"msdyn_octwitterapplication">;
      get(name: "msdyn_octwitterscreenname"): Xrm.Attribute<string>;
      get(name: "msdyn_octwitteruniquehandleid"): Xrm.Attribute<string>;
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
      get(name: "WebResource_TwitterHandleInstruction"): Xrm.WebResourceControl;
      get(name: "WebResource_TwitterSignin"): Xrm.WebResourceControl;
      get(name: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
      get(name: "instance_CustomSystemMessage"): Xrm.BaseControl;
      get(name: "msdyn_FormsProButton"): Xrm.BaseControl;
      get(name: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_octwitterapplicationid"): Xrm.LookupControl<"msdyn_octwitterapplication">;
      get(name: "msdyn_octwitterscreenname"): Xrm.StringControl;
      get(name: "msdyn_octwitteruniquehandleid"): Xrm.StringControl;
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
      get(name: "{eb2b8734-9d0a-421f-9076-ba13303c27f6}"): Xrm.PageTab<Tabs.eb2b87349d0a421f9076ba13303c27f6>;
      get(name: "survey_tab_1"): Xrm.PageTab<Tabs.survey_tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_octwitterapplicationid"): Xrm.LookupAttribute<"msdyn_octwitterapplication">;
    getAttribute(attributeName: "msdyn_octwitterscreenname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_octwitteruniquehandleid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ocwidgetlanguage"): Xrm.LookupAttribute<"msdyn_oclanguage">;
    getAttribute(attributeName: "msdyn_postconversationsurvey"): Xrm.LookupAttribute<"msfp_survey">;
    getAttribute(attributeName: "msdyn_postconversationsurveyenable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_postconversationsurveymessagetext"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_postconversationsurveymode"): Xrm.OptionSetAttribute<msdyn_postconversationsurveymode>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_TwitterHandleInstruction"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TwitterSignin"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_postconversationsurveydisclaimer"): Xrm.WebResourceControl;
    getControl(controlName: "instance_CustomSystemMessage"): Xrm.BaseControl;
    getControl(controlName: "msdyn_FormsProButton"): Xrm.BaseControl;
    getControl(controlName: "msdyn_enablefileattachmentsforagents"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablefileattachmentsforcustomers"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_octwitterapplicationid"): Xrm.LookupControl<"msdyn_octwitterapplication">;
    getControl(controlName: "msdyn_octwitterscreenname"): Xrm.StringControl;
    getControl(controlName: "msdyn_octwitteruniquehandleid"): Xrm.StringControl;
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
