declare namespace Form.mailbox.Main {
  namespace Information {
    namespace Tabs {
      interface MailboxStatusTab extends Xrm.SectionCollectionBase {
        get(name: "MailboxStatusTab_section_1"): Xrm.PageSection;
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
      get(name: "actdeliverymethod"): Xrm.OptionSetAttribute<mailbox_actdeliverymethod>;
      get(name: "actstatus"): Xrm.OptionSetAttribute<mailbox_actstatus>;
      get(name: "allowemailconnectortousecredentials"): Xrm.OptionSetAttribute<boolean>;
      get(name: "emailaddress"): Xrm.Attribute<string>;
      get(name: "emailserverprofile"): Xrm.LookupAttribute<"emailserverprofile">;
      get(name: "incomingemaildeliverymethod"): Xrm.OptionSetAttribute<mailbox_incomingemaildeliverymethod>;
      get(name: "incomingemailstatus"): Xrm.OptionSetAttribute<mailbox_incomingemailstatus>;
      get(name: "isemailaddressapprovedbyo365admin"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isforwardmailbox"): Xrm.OptionSetAttribute<boolean>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "oauthaccesstoken"): Xrm.Attribute<string>;
      get(name: "outgoingemaildeliverymethod"): Xrm.OptionSetAttribute<mailbox_outgoingemaildeliverymethod>;
      get(name: "outgoingemailstatus"): Xrm.OptionSetAttribute<mailbox_outgoingemailstatus>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "password"): Xrm.Attribute<string>;
      get(name: "processanddeleteemails"): Xrm.OptionSetAttribute<boolean>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"queue" | "systemuser">;
      get(name: "statecode"): Xrm.OptionSetAttribute<mailbox_statecode>;
      get(name: "testmailboxaccesscompletedon"): Xrm.DateAttribute;
      get(name: "username"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "actdeliverymethod"): Xrm.OptionSetControl<mailbox_actdeliverymethod>;
      get(name: "actstatus"): Xrm.OptionSetControl<mailbox_actstatus>;
      get(name: "allowemailconnectortousecredentials"): Xrm.OptionSetControl<boolean>;
      get(name: "emailaddress"): Xrm.StringControl;
      get(name: "emailserverprofile"): Xrm.LookupControl<"emailserverprofile">;
      get(name: "footer_statecode"): Xrm.OptionSetControl<mailbox_statecode>;
      get(name: "incomingemaildeliverymethod"): Xrm.OptionSetControl<mailbox_incomingemaildeliverymethod>;
      get(name: "incomingemailstatus"): Xrm.OptionSetControl<mailbox_incomingemailstatus>;
      get(name: "isemailaddressapprovedbyo365admin"): Xrm.OptionSetControl<boolean>;
      get(name: "isforwardmailbox"): Xrm.OptionSetControl<boolean>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "oauthaccesstoken"): Xrm.StringControl;
      get(name: "outgoingemaildeliverymethod"): Xrm.OptionSetControl<mailbox_outgoingemaildeliverymethod>;
      get(name: "outgoingemailstatus"): Xrm.OptionSetControl<mailbox_outgoingemailstatus>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "password"): Xrm.StringControl;
      get(name: "processanddeleteemails"): Xrm.OptionSetControl<boolean>;
      get(name: "regardingobjectid"): Xrm.LookupControl<"queue" | "systemuser">;
      get(name: "testmailboxaccesscompletedon"): Xrm.DateControl;
      get(name: "username"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "MailboxStatusTab"): Xrm.PageTab<Tabs.MailboxStatusTab>;
      get(name: "tab_4"): Xrm.PageTab<Tabs.tab_4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "actdeliverymethod"): Xrm.OptionSetAttribute<mailbox_actdeliverymethod>;
    getAttribute(attributeName: "actstatus"): Xrm.OptionSetAttribute<mailbox_actstatus>;
    getAttribute(attributeName: "allowemailconnectortousecredentials"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "emailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailserverprofile"): Xrm.LookupAttribute<"emailserverprofile">;
    getAttribute(attributeName: "incomingemaildeliverymethod"): Xrm.OptionSetAttribute<mailbox_incomingemaildeliverymethod>;
    getAttribute(attributeName: "incomingemailstatus"): Xrm.OptionSetAttribute<mailbox_incomingemailstatus>;
    getAttribute(attributeName: "isemailaddressapprovedbyo365admin"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isforwardmailbox"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "oauthaccesstoken"): Xrm.Attribute<string>;
    getAttribute(attributeName: "outgoingemaildeliverymethod"): Xrm.OptionSetAttribute<mailbox_outgoingemaildeliverymethod>;
    getAttribute(attributeName: "outgoingemailstatus"): Xrm.OptionSetAttribute<mailbox_outgoingemailstatus>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "password"): Xrm.Attribute<string>;
    getAttribute(attributeName: "processanddeleteemails"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"queue" | "systemuser">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<mailbox_statecode>;
    getAttribute(attributeName: "testmailboxaccesscompletedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "username"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "actdeliverymethod"): Xrm.OptionSetControl<mailbox_actdeliverymethod>;
    getControl(controlName: "actstatus"): Xrm.OptionSetControl<mailbox_actstatus>;
    getControl(controlName: "allowemailconnectortousecredentials"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "emailaddress"): Xrm.StringControl;
    getControl(controlName: "emailserverprofile"): Xrm.LookupControl<"emailserverprofile">;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<mailbox_statecode>;
    getControl(controlName: "incomingemaildeliverymethod"): Xrm.OptionSetControl<mailbox_incomingemaildeliverymethod>;
    getControl(controlName: "incomingemailstatus"): Xrm.OptionSetControl<mailbox_incomingemailstatus>;
    getControl(controlName: "isemailaddressapprovedbyo365admin"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isforwardmailbox"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "oauthaccesstoken"): Xrm.StringControl;
    getControl(controlName: "outgoingemaildeliverymethod"): Xrm.OptionSetControl<mailbox_outgoingemaildeliverymethod>;
    getControl(controlName: "outgoingemailstatus"): Xrm.OptionSetControl<mailbox_outgoingemailstatus>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "password"): Xrm.StringControl;
    getControl(controlName: "processanddeleteemails"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"queue" | "systemuser">;
    getControl(controlName: "testmailboxaccesscompletedon"): Xrm.DateControl;
    getControl(controlName: "username"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
