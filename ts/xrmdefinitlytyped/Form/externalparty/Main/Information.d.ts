declare namespace Form.externalparty.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "correlationkey"): Xrm.Attribute<string>;
      get(name: "emailaddress"): Xrm.Attribute<string>;
      get(name: "fullname"): Xrm.Attribute<string> | null;
      get(name: "lastdisabledon"): Xrm.DateAttribute;
      get(name: "lastenabledon"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<externalparty_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "correlationkey"): Xrm.StringControl;
      get(name: "emailaddress"): Xrm.StringControl;
      get(name: "externalPartyItemsGrid"): Xrm.SubGridControl<"externalpartyitem">;
      get(name: "fullname"): Xrm.StringControl | null;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<externalparty_statuscode>;
      get(name: "lastdisabledon"): Xrm.DateControl;
      get(name: "lastenabledon"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "correlationkey"): Xrm.Attribute<string>;
    getAttribute(attributeName: "emailaddress"): Xrm.Attribute<string>;
    getAttribute(attributeName: "fullname"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "lastdisabledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "lastenabledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<externalparty_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "correlationkey"): Xrm.StringControl;
    getControl(controlName: "emailaddress"): Xrm.StringControl;
    getControl(controlName: "externalPartyItemsGrid"): Xrm.SubGridControl<"externalpartyitem">;
    getControl(controlName: "fullname"): Xrm.StringControl | null;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<externalparty_statuscode>;
    getControl(controlName: "lastdisabledon"): Xrm.DateControl;
    getControl(controlName: "lastenabledon"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
