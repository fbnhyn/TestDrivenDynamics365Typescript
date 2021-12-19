declare namespace Form.contact.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "billing information"): Xrm.PageSection;
        get(name: "contact methods"): Xrm.PageSection;
        get(name: "internal information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface conflictstab extends Xrm.SectionCollectionBase {
        get(name: "conflictssection"): Xrm.PageSection;
        get(name: "marketing information"): Xrm.PageSection;
        get(name: "service preferences"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details extends Xrm.SectionCollectionBase {
        get(name: "personal information"): Xrm.PageSection;
        get(name: "professional information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "address"): Xrm.PageSection;
        get(name: "description"): Xrm.PageSection;
        get(name: "name"): Xrm.PageSection;
        get(name: "shipping information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notesandactivities extends Xrm.SectionCollectionBase {
        get(name: "activities"): Xrm.PageSection;
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_recordwall extends Xrm.SectionCollectionBase {
        get(name: "tab_recordwall_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.Attribute<string>;
      get(name: "address1_country"): Xrm.Attribute<string>;
      get(name: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.Attribute<string>;
      get(name: "address1_line2"): Xrm.Attribute<string>;
      get(name: "address1_line3"): Xrm.Attribute<string>;
      get(name: "address1_name"): Xrm.Attribute<string>;
      get(name: "address1_postalcode"): Xrm.Attribute<string>;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.Attribute<string>;
      get(name: "address1_telephone1"): Xrm.Attribute<string>;
      get(name: "anniversary"): Xrm.DateAttribute;
      get(name: "assistantname"): Xrm.Attribute<string>;
      get(name: "assistantphone"): Xrm.Attribute<string>;
      get(name: "birthdate"): Xrm.DateAttribute;
      get(name: "creditlimit"): Xrm.NumberAttribute;
      get(name: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
      get(name: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "department"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotemail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotfax"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotphone"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress1"): Xrm.Attribute<string>;
      get(name: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
      get(name: "fax"): Xrm.Attribute<string>;
      get(name: "firstname"): Xrm.Attribute<string>;
      get(name: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
      get(name: "industrycode"): Xrm.OptionSetAttribute<number> | null;
      get(name: "jobtitle"): Xrm.Attribute<string>;
      get(name: "lastname"): Xrm.Attribute<string>;
      get(name: "lastusedincampaign"): Xrm.DateAttribute;
      get(name: "managername"): Xrm.Attribute<string>;
      get(name: "managerphone"): Xrm.Attribute<string>;
      get(name: "middlename"): Xrm.Attribute<string>;
      get(name: "mobilephone"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string> | null;
      get(name: "originatingleadid"): Xrm.LookupAttribute<"lead">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
      get(name: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
      get(name: "preferredappointmentdaycode"): Xrm.OptionSetAttribute<contact_preferredappointmentdaycode>;
      get(name: "preferredappointmenttimecode"): Xrm.OptionSetAttribute<contact_preferredappointmenttimecode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
      get(name: "preferredequipmentid"): Xrm.LookupAttribute<"equipment">;
      get(name: "preferredserviceid"): Xrm.LookupAttribute<"service">;
      get(name: "preferredsystemuserid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "salutation"): Xrm.Attribute<string>;
      get(name: "spousesname"): Xrm.Attribute<string>;
      get(name: "telephone1"): Xrm.Attribute<string>;
      get(name: "telephone2"): Xrm.Attribute<string>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "websiteurl"): Xrm.Attribute<string> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_RecordWall"): Xrm.WebResourceControl;
      get(name: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
      get(name: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
      get(name: "address1_city"): Xrm.StringControl;
      get(name: "address1_country"): Xrm.StringControl;
      get(name: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
      get(name: "address1_line1"): Xrm.StringControl;
      get(name: "address1_line2"): Xrm.StringControl;
      get(name: "address1_line3"): Xrm.StringControl;
      get(name: "address1_name"): Xrm.StringControl;
      get(name: "address1_postalcode"): Xrm.StringControl;
      get(name: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
      get(name: "address1_stateorprovince"): Xrm.StringControl;
      get(name: "address1_telephone1"): Xrm.StringControl;
      get(name: "anniversary"): Xrm.DateControl;
      get(name: "assistantname"): Xrm.StringControl;
      get(name: "assistantphone"): Xrm.StringControl;
      get(name: "birthdate"): Xrm.DateControl;
      get(name: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
      get(name: "creditlimit"): Xrm.NumberControl;
      get(name: "creditonhold"): Xrm.OptionSetControl<boolean>;
      get(name: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "department"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotemail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotfax"): Xrm.OptionSetControl<boolean>;
      get(name: "donotphone"): Xrm.OptionSetControl<boolean>;
      get(name: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
      get(name: "donotsendmm"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress1"): Xrm.StringControl;
      get(name: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
      get(name: "fax"): Xrm.StringControl;
      get(name: "firstname"): Xrm.StringControl;
      get(name: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
      get(name: "header_emailaddress1"): Xrm.StringControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "header_process_birthdate"): Xrm.DateControl | null;
      get(name: "header_process_emailaddress1"): Xrm.StringControl | null;
      get(name: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
      get(name: "header_process_firstname"): Xrm.StringControl | null;
      get(name: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
      get(name: "header_process_lastname"): Xrm.StringControl | null;
      get(name: "header_process_middlename"): Xrm.StringControl | null;
      get(name: "header_process_mobilephone"): Xrm.StringControl | null;
      get(name: "header_process_name"): Xrm.StringControl | null;
      get(name: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_spousesname"): Xrm.StringControl | null;
      get(name: "header_process_telephone1"): Xrm.StringControl | null;
      get(name: "header_process_websiteurl"): Xrm.StringControl | null;
      get(name: "jobtitle"): Xrm.StringControl;
      get(name: "lastname"): Xrm.StringControl;
      get(name: "lastusedincampaign"): Xrm.DateControl;
      get(name: "managername"): Xrm.StringControl;
      get(name: "managerphone"): Xrm.StringControl;
      get(name: "middlename"): Xrm.StringControl;
      get(name: "mobilephone"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "originatingleadid"): Xrm.LookupControl<"lead">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
      get(name: "preferredappointmentdaycode"): Xrm.OptionSetControl<contact_preferredappointmentdaycode>;
      get(name: "preferredappointmenttimecode"): Xrm.OptionSetControl<contact_preferredappointmenttimecode>;
      get(name: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
      get(name: "preferredequipmentid"): Xrm.LookupControl<"equipment">;
      get(name: "preferredserviceid"): Xrm.LookupControl<"service">;
      get(name: "preferredsystemuserid"): Xrm.LookupControl<"systemuser">;
      get(name: "salutation"): Xrm.StringControl;
      get(name: "spousesname"): Xrm.StringControl;
      get(name: "telephone1"): Xrm.StringControl;
      get(name: "telephone2"): Xrm.StringControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "conflictstab"): Xrm.PageTab<Tabs.conflictstab>;
      get(name: "details"): Xrm.PageTab<Tabs.details>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes and activities"): Xrm.PageTab<Tabs.notesandactivities>;
      get(name: "tab_recordwall"): Xrm.PageTab<Tabs.tab_recordwall>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "accountrolecode"): Xrm.OptionSetAttribute<contact_accountrolecode>;
    getAttribute(attributeName: "address1_addresstypecode"): Xrm.OptionSetAttribute<contact_address1_addresstypecode>;
    getAttribute(attributeName: "address1_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_freighttermscode"): Xrm.OptionSetAttribute<contact_address1_freighttermscode>;
    getAttribute(attributeName: "address1_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_shippingmethodcode"): Xrm.OptionSetAttribute<contact_address1_shippingmethodcode>;
    getAttribute(attributeName: "address1_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "address1_telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "anniversary"): Xrm.DateAttribute;
    getAttribute(attributeName: "assistantname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "assistantphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "birthdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "creditlimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "creditonhold"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "defaultpricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "department"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "donotbulkemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotemail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotfax"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotphone"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotpostalmail"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "donotsendmm"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "familystatuscode"): Xrm.OptionSetAttribute<contact_familystatuscode>;
    getAttribute(attributeName: "fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "firstname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "gendercode"): Xrm.OptionSetAttribute<contact_gendercode>;
    getAttribute(attributeName: "industrycode"): Xrm.OptionSetAttribute<number> | null;
    getAttribute(attributeName: "jobtitle"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "lastusedincampaign"): Xrm.DateAttribute;
    getAttribute(attributeName: "managername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "managerphone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "middlename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "mobilephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "originatingleadid"): Xrm.LookupAttribute<"lead">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "parentaccountid"): Xrm.LookupAttribute<"account"> | null;
    getAttribute(attributeName: "parentcustomerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<contact_paymenttermscode>;
    getAttribute(attributeName: "preferredappointmentdaycode"): Xrm.OptionSetAttribute<contact_preferredappointmentdaycode>;
    getAttribute(attributeName: "preferredappointmenttimecode"): Xrm.OptionSetAttribute<contact_preferredappointmenttimecode>;
    getAttribute(attributeName: "preferredcontactmethodcode"): Xrm.OptionSetAttribute<contact_preferredcontactmethodcode>;
    getAttribute(attributeName: "preferredequipmentid"): Xrm.LookupAttribute<"equipment">;
    getAttribute(attributeName: "preferredserviceid"): Xrm.LookupAttribute<"service">;
    getAttribute(attributeName: "preferredsystemuserid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "salutation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "spousesname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "telephone2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "websiteurl"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_RecordWall"): Xrm.WebResourceControl;
    getControl(controlName: "accountrolecode"): Xrm.OptionSetControl<contact_accountrolecode>;
    getControl(controlName: "address1_addresstypecode"): Xrm.OptionSetControl<contact_address1_addresstypecode>;
    getControl(controlName: "address1_city"): Xrm.StringControl;
    getControl(controlName: "address1_country"): Xrm.StringControl;
    getControl(controlName: "address1_freighttermscode"): Xrm.OptionSetControl<contact_address1_freighttermscode>;
    getControl(controlName: "address1_line1"): Xrm.StringControl;
    getControl(controlName: "address1_line2"): Xrm.StringControl;
    getControl(controlName: "address1_line3"): Xrm.StringControl;
    getControl(controlName: "address1_name"): Xrm.StringControl;
    getControl(controlName: "address1_postalcode"): Xrm.StringControl;
    getControl(controlName: "address1_shippingmethodcode"): Xrm.OptionSetControl<contact_address1_shippingmethodcode>;
    getControl(controlName: "address1_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "address1_telephone1"): Xrm.StringControl;
    getControl(controlName: "anniversary"): Xrm.DateControl;
    getControl(controlName: "assistantname"): Xrm.StringControl;
    getControl(controlName: "assistantphone"): Xrm.StringControl;
    getControl(controlName: "birthdate"): Xrm.DateControl;
    getControl(controlName: "contactactivitiesgrid"): Xrm.SubGridControl<"activitypointer">;
    getControl(controlName: "creditlimit"): Xrm.NumberControl;
    getControl(controlName: "creditonhold"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "defaultpricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "department"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "donotbulkemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotemail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotfax"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotphone"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotpostalmail"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "donotsendmm"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress1"): Xrm.StringControl;
    getControl(controlName: "familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode>;
    getControl(controlName: "fax"): Xrm.StringControl;
    getControl(controlName: "firstname"): Xrm.StringControl;
    getControl(controlName: "gendercode"): Xrm.OptionSetControl<contact_gendercode>;
    getControl(controlName: "header_emailaddress1"): Xrm.StringControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "header_process_birthdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_emailaddress1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_familystatuscode"): Xrm.OptionSetControl<contact_familystatuscode> | null;
    getControl(controlName: "header_process_firstname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_industrycode"): Xrm.OptionSetControl<number> | null;
    getControl(controlName: "header_process_lastname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_middlename"): Xrm.StringControl | null;
    getControl(controlName: "header_process_mobilephone"): Xrm.StringControl | null;
    getControl(controlName: "header_process_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_parentaccountid"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_spousesname"): Xrm.StringControl | null;
    getControl(controlName: "header_process_telephone1"): Xrm.StringControl | null;
    getControl(controlName: "header_process_websiteurl"): Xrm.StringControl | null;
    getControl(controlName: "jobtitle"): Xrm.StringControl;
    getControl(controlName: "lastname"): Xrm.StringControl;
    getControl(controlName: "lastusedincampaign"): Xrm.DateControl;
    getControl(controlName: "managername"): Xrm.StringControl;
    getControl(controlName: "managerphone"): Xrm.StringControl;
    getControl(controlName: "middlename"): Xrm.StringControl;
    getControl(controlName: "mobilephone"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "originatingleadid"): Xrm.LookupControl<"lead">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "parentcustomerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<contact_paymenttermscode>;
    getControl(controlName: "preferredappointmentdaycode"): Xrm.OptionSetControl<contact_preferredappointmentdaycode>;
    getControl(controlName: "preferredappointmenttimecode"): Xrm.OptionSetControl<contact_preferredappointmenttimecode>;
    getControl(controlName: "preferredcontactmethodcode"): Xrm.OptionSetControl<contact_preferredcontactmethodcode>;
    getControl(controlName: "preferredequipmentid"): Xrm.LookupControl<"equipment">;
    getControl(controlName: "preferredserviceid"): Xrm.LookupControl<"service">;
    getControl(controlName: "preferredsystemuserid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "salutation"): Xrm.StringControl;
    getControl(controlName: "spousesname"): Xrm.StringControl;
    getControl(controlName: "telephone1"): Xrm.StringControl;
    getControl(controlName: "telephone2"): Xrm.StringControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
