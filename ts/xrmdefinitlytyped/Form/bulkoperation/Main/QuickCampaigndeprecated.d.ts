declare namespace Form.bulkoperation.Main {
  namespace QuickCampaigndeprecated {
    namespace Tabs {
      interface Responses extends Xrm.SectionCollectionBase {
        get(name: "Responses"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary extends Xrm.SectionCollectionBase {
        get(name: "Information"): Xrm.PageSection;
        get(name: "RELATED PANE"): Xrm.PageSection;
        get(name: "excludedMembers"): Xrm.PageSection;
        get(name: "selectedMembers"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "createdrecordtypecode"): Xrm.OptionSetAttribute<bulkoperation_createdrecordtypecode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "failurecount"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<boolean>;
      get(name: "subject"): Xrm.Attribute<string>;
      get(name: "successcount"): Xrm.NumberAttribute;
      get(name: "targetedrecordtypecode"): Xrm.OptionSetAttribute<bulkoperation_targetedrecordtypecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Responses"): Xrm.SubGridControl<"campaignresponse">;
      get(name: "accounts"): Xrm.SubGridControl<"account">;
      get(name: "accounts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "contacts"): Xrm.SubGridControl<"contact">;
      get(name: "contacts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "description"): Xrm.StringControl;
      get(name: "excluded_accounts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "excluded_contacts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "excluded_leads_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "failurecount"): Xrm.NumberControl;
      get(name: "header_createdon"): Xrm.DateControl;
      get(name: "header_createdrecordtypecode"): Xrm.OptionSetControl<bulkoperation_createdrecordtypecode>;
      get(name: "header_statuscode"): Xrm.OptionSetControl<boolean>;
      get(name: "header_targetedrecordtypecode"): Xrm.OptionSetControl<bulkoperation_targetedrecordtypecode>;
      get(name: "leads"): Xrm.SubGridControl<"lead">;
      get(name: "leads_uci"): Xrm.SubGridControl<"bulkoperationlog">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "subject"): Xrm.StringControl;
      get(name: "successcount"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Responses"): Xrm.PageTab<Tabs.Responses>;
      get(name: "Summary"): Xrm.PageTab<Tabs.Summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCampaigndeprecated extends Xrm.PageBase<QuickCampaigndeprecated.Attributes,QuickCampaigndeprecated.Tabs,QuickCampaigndeprecated.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "createdrecordtypecode"): Xrm.OptionSetAttribute<bulkoperation_createdrecordtypecode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "failurecount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "successcount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "targetedrecordtypecode"): Xrm.OptionSetAttribute<bulkoperation_targetedrecordtypecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Responses"): Xrm.SubGridControl<"campaignresponse">;
    getControl(controlName: "accounts"): Xrm.SubGridControl<"account">;
    getControl(controlName: "accounts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "contacts"): Xrm.SubGridControl<"contact">;
    getControl(controlName: "contacts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "excluded_accounts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "excluded_contacts_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "excluded_leads_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "failurecount"): Xrm.NumberControl;
    getControl(controlName: "header_createdon"): Xrm.DateControl;
    getControl(controlName: "header_createdrecordtypecode"): Xrm.OptionSetControl<bulkoperation_createdrecordtypecode>;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "header_targetedrecordtypecode"): Xrm.OptionSetControl<bulkoperation_targetedrecordtypecode>;
    getControl(controlName: "leads"): Xrm.SubGridControl<"lead">;
    getControl(controlName: "leads_uci"): Xrm.SubGridControl<"bulkoperationlog">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "subject"): Xrm.StringControl;
    getControl(controlName: "successcount"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
