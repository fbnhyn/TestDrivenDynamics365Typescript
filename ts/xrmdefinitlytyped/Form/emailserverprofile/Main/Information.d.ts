declare namespace Form.emailserverprofile.Main {
  namespace Information {
    namespace Tabs {
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_1"): Xrm.PageSection;
        get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_2"): Xrm.PageSection;
        get(name: "{2EB17E5B-3A06-43BD-BB50-23F8630CD9F8}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_4 extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "emailservertypename"): Xrm.Attribute<string>;
      get(name: "exchangeonlinetenantid"): Xrm.Attribute<string>;
      get(name: "incomingauthenticationprotocol"): Xrm.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
      get(name: "incomingcredentialretrieval"): Xrm.OptionSetAttribute<emailserverprofile_incomingcredentialretrieval>;
      get(name: "incomingpassword"): Xrm.Attribute<string>;
      get(name: "incomingportnumber"): Xrm.NumberAttribute;
      get(name: "incomingserverlocation"): Xrm.Attribute<string>;
      get(name: "incominguseimpersonation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "incomingusername"): Xrm.Attribute<string>;
      get(name: "incomingusessl"): Xrm.OptionSetAttribute<boolean>;
      get(name: "maxconcurrentconnections"): Xrm.NumberAttribute;
      get(name: "minpollingintervalinminutes"): Xrm.NumberAttribute;
      get(name: "moveundeliveredemails"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "oauthclientid"): Xrm.Attribute<string>;
      get(name: "oauthclientsecret"): Xrm.Attribute<string>;
      get(name: "outgoingauthenticationprotocol"): Xrm.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
      get(name: "outgoingcredentialretrieval"): Xrm.OptionSetAttribute<emailserverprofile_outgoingcredentialretrieval>;
      get(name: "outgoingpassword"): Xrm.Attribute<string>;
      get(name: "outgoingportnumber"): Xrm.NumberAttribute;
      get(name: "outgoingserverlocation"): Xrm.Attribute<string>;
      get(name: "outgoinguseimpersonation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "outgoingusername"): Xrm.Attribute<string>;
      get(name: "outgoingusessl"): Xrm.OptionSetAttribute<boolean>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "processemailsreceivedafter"): Xrm.DateAttribute;
      get(name: "sendemailalert"): Xrm.OptionSetAttribute<boolean>;
      get(name: "servertype"): Xrm.OptionSetAttribute<emailserverprofile_servertype>;
      get(name: "statecode"): Xrm.OptionSetAttribute<emailserverprofile_statecode>;
      get(name: "timeoutmailboxconnection"): Xrm.OptionSetAttribute<boolean>;
      get(name: "timeoutmailboxconnectionafteramount"): Xrm.NumberAttribute;
      get(name: "useautodiscover"): Xrm.OptionSetAttribute<boolean>;
      get(name: "usedefaulttenantid"): Xrm.OptionSetAttribute<boolean>;
      get(name: "usesamesettingsforoutgoingconnections"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "description"): Xrm.StringControl;
      get(name: "emailservertypename"): Xrm.StringControl;
      get(name: "exchangeonlinetenantid"): Xrm.StringControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<emailserverprofile_statecode>;
      get(name: "incomingauthenticationprotocol"): Xrm.OptionSetControl<emailserverprofile_authenticationprotocol>;
      get(name: "incomingcredentialretrieval"): Xrm.OptionSetControl<emailserverprofile_incomingcredentialretrieval>;
      get(name: "incomingpassword"): Xrm.StringControl;
      get(name: "incomingportnumber"): Xrm.NumberControl;
      get(name: "incomingserverlocation"): Xrm.StringControl;
      get(name: "incominguseimpersonation"): Xrm.OptionSetControl<boolean>;
      get(name: "incomingusername"): Xrm.StringControl;
      get(name: "incomingusessl"): Xrm.OptionSetControl<boolean>;
      get(name: "maxconcurrentconnections"): Xrm.NumberControl;
      get(name: "minpollingintervalinminutes"): Xrm.NumberControl;
      get(name: "moveundeliveredemails"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "oauthclientid"): Xrm.StringControl;
      get(name: "oauthclientsecret"): Xrm.StringControl;
      get(name: "outgoingauthenticationprotocol"): Xrm.OptionSetControl<emailserverprofile_authenticationprotocol>;
      get(name: "outgoingcredentialretrieval"): Xrm.OptionSetControl<emailserverprofile_outgoingcredentialretrieval>;
      get(name: "outgoingpassword"): Xrm.StringControl;
      get(name: "outgoingportnumber"): Xrm.NumberControl;
      get(name: "outgoingserverlocation"): Xrm.StringControl;
      get(name: "outgoinguseimpersonation"): Xrm.OptionSetControl<boolean>;
      get(name: "outgoingusername"): Xrm.StringControl;
      get(name: "outgoingusessl"): Xrm.OptionSetControl<boolean>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "processemailsreceivedafter"): Xrm.DateControl;
      get(name: "sendemailalert"): Xrm.OptionSetControl<boolean>;
      get(name: "servertype"): Xrm.OptionSetControl<emailserverprofile_servertype>;
      get(name: "timeoutmailboxconnection"): Xrm.OptionSetControl<boolean>;
      get(name: "timeoutmailboxconnectionafteramount"): Xrm.NumberControl;
      get(name: "useautodiscover"): Xrm.OptionSetControl<boolean>;
      get(name: "usedefaulttenantid"): Xrm.OptionSetControl<boolean>;
      get(name: "usesamesettingsforoutgoingconnections"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailservertypename"): Xrm.Attribute<string>;
    getAttribute(attributeName: "exchangeonlinetenantid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "incomingauthenticationprotocol"): Xrm.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
    getAttribute(attributeName: "incomingcredentialretrieval"): Xrm.OptionSetAttribute<emailserverprofile_incomingcredentialretrieval>;
    getAttribute(attributeName: "incomingpassword"): Xrm.Attribute<string>;
    getAttribute(attributeName: "incomingportnumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "incomingserverlocation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "incominguseimpersonation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "incomingusername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "incomingusessl"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "maxconcurrentconnections"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minpollingintervalinminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "moveundeliveredemails"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "oauthclientid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "oauthclientsecret"): Xrm.Attribute<string>;
    getAttribute(attributeName: "outgoingauthenticationprotocol"): Xrm.OptionSetAttribute<emailserverprofile_authenticationprotocol>;
    getAttribute(attributeName: "outgoingcredentialretrieval"): Xrm.OptionSetAttribute<emailserverprofile_outgoingcredentialretrieval>;
    getAttribute(attributeName: "outgoingpassword"): Xrm.Attribute<string>;
    getAttribute(attributeName: "outgoingportnumber"): Xrm.NumberAttribute;
    getAttribute(attributeName: "outgoingserverlocation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "outgoinguseimpersonation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "outgoingusername"): Xrm.Attribute<string>;
    getAttribute(attributeName: "outgoingusessl"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "processemailsreceivedafter"): Xrm.DateAttribute;
    getAttribute(attributeName: "sendemailalert"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "servertype"): Xrm.OptionSetAttribute<emailserverprofile_servertype>;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<emailserverprofile_statecode>;
    getAttribute(attributeName: "timeoutmailboxconnection"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "timeoutmailboxconnectionafteramount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "useautodiscover"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "usedefaulttenantid"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "usesamesettingsforoutgoingconnections"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "emailservertypename"): Xrm.StringControl;
    getControl(controlName: "exchangeonlinetenantid"): Xrm.StringControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<emailserverprofile_statecode>;
    getControl(controlName: "incomingauthenticationprotocol"): Xrm.OptionSetControl<emailserverprofile_authenticationprotocol>;
    getControl(controlName: "incomingcredentialretrieval"): Xrm.OptionSetControl<emailserverprofile_incomingcredentialretrieval>;
    getControl(controlName: "incomingpassword"): Xrm.StringControl;
    getControl(controlName: "incomingportnumber"): Xrm.NumberControl;
    getControl(controlName: "incomingserverlocation"): Xrm.StringControl;
    getControl(controlName: "incominguseimpersonation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "incomingusername"): Xrm.StringControl;
    getControl(controlName: "incomingusessl"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "maxconcurrentconnections"): Xrm.NumberControl;
    getControl(controlName: "minpollingintervalinminutes"): Xrm.NumberControl;
    getControl(controlName: "moveundeliveredemails"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "oauthclientid"): Xrm.StringControl;
    getControl(controlName: "oauthclientsecret"): Xrm.StringControl;
    getControl(controlName: "outgoingauthenticationprotocol"): Xrm.OptionSetControl<emailserverprofile_authenticationprotocol>;
    getControl(controlName: "outgoingcredentialretrieval"): Xrm.OptionSetControl<emailserverprofile_outgoingcredentialretrieval>;
    getControl(controlName: "outgoingpassword"): Xrm.StringControl;
    getControl(controlName: "outgoingportnumber"): Xrm.NumberControl;
    getControl(controlName: "outgoingserverlocation"): Xrm.StringControl;
    getControl(controlName: "outgoinguseimpersonation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "outgoingusername"): Xrm.StringControl;
    getControl(controlName: "outgoingusessl"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "processemailsreceivedafter"): Xrm.DateControl;
    getControl(controlName: "sendemailalert"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "servertype"): Xrm.OptionSetControl<emailserverprofile_servertype>;
    getControl(controlName: "timeoutmailboxconnection"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "timeoutmailboxconnectionafteramount"): Xrm.NumberControl;
    getControl(controlName: "useautodiscover"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "usedefaulttenantid"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "usesamesettingsforoutgoingconnections"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
