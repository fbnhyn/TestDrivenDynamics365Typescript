declare namespace Form.externalpartyitem.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "channelaccessprofileid"): Xrm.LookupAttribute<"channelaccessprofile">;
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "externalpartyid"): Xrm.LookupAttribute<"externalparty">;
      get(name: "lastdisabledon"): Xrm.DateAttribute;
      get(name: "lastenabledon"): Xrm.DateAttribute;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"contact" | "systemuser">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<externalpartyitem_status_code>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "channelaccessprofileid"): Xrm.LookupControl<"channelaccessprofile">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "externalpartyid"): Xrm.LookupControl<"externalparty">;
      get(name: "header_statuscode"): Xrm.OptionSetControl<externalpartyitem_status_code>;
      get(name: "lastdisabledon"): Xrm.DateControl;
      get(name: "lastenabledon"): Xrm.DateControl;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"contact" | "systemuser">;
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
    getAttribute(attributeName: "channelaccessprofileid"): Xrm.LookupAttribute<"channelaccessprofile">;
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "externalpartyid"): Xrm.LookupAttribute<"externalparty">;
    getAttribute(attributeName: "lastdisabledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "lastenabledon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"contact" | "systemuser">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<externalpartyitem_status_code>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "channelaccessprofileid"): Xrm.LookupControl<"channelaccessprofile">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "externalpartyid"): Xrm.LookupControl<"externalparty">;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<externalpartyitem_status_code>;
    getControl(controlName: "lastdisabledon"): Xrm.DateControl;
    getControl(controlName: "lastenabledon"): Xrm.DateControl;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"contact" | "systemuser">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
