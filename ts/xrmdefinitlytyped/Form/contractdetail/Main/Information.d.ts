declare namespace Form.contractdetail.Main {
  namespace Information {
    namespace Tabs {
      interface administration extends Xrm.SectionCollectionBase {
        get(name: "customer information"): Xrm.PageSection;
        get(name: "serial number"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "allotment details"): Xrm.PageSection;
        get(name: "contract detail information"): Xrm.PageSection;
        get(name: "pricing"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface notes extends Xrm.SectionCollectionBase {
        get(name: "notes"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "activeon"): Xrm.DateAttribute;
      get(name: "allotmentsremaining"): Xrm.NumberAttribute;
      get(name: "allotmentsused"): Xrm.NumberAttribute;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "discount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "expireson"): Xrm.DateAttribute;
      get(name: "initialquantity"): Xrm.NumberAttribute;
      get(name: "net"): Xrm.NumberAttribute;
      get(name: "price"): Xrm.NumberAttribute;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "productserialnumber"): Xrm.Attribute<string>;
      get(name: "rate"): Xrm.NumberAttribute;
      get(name: "serviceaddress"): Xrm.LookupAttribute<"customeraddress">;
      get(name: "title"): Xrm.Attribute<string>;
      get(name: "totalallotments"): Xrm.NumberAttribute;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "activeon"): Xrm.DateControl;
      get(name: "allotmentsremaining"): Xrm.NumberControl;
      get(name: "allotmentsused"): Xrm.NumberControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "discount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "expireson"): Xrm.DateControl;
      get(name: "initialquantity"): Xrm.NumberControl;
      get(name: "net"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "price"): Xrm.NumberControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "productserialnumber"): Xrm.StringControl;
      get(name: "rate"): Xrm.NumberControl;
      get(name: "serviceaddress"): Xrm.LookupControl<"customeraddress">;
      get(name: "title"): Xrm.StringControl;
      get(name: "totalallotments"): Xrm.NumberControl;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "administration"): Xrm.PageTab<Tabs.administration>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: "notes"): Xrm.PageTab<Tabs.notes>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "activeon"): Xrm.DateAttribute;
    getAttribute(attributeName: "allotmentsremaining"): Xrm.NumberAttribute;
    getAttribute(attributeName: "allotmentsused"): Xrm.NumberAttribute;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "discount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "expireson"): Xrm.DateAttribute;
    getAttribute(attributeName: "initialquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "net"): Xrm.NumberAttribute;
    getAttribute(attributeName: "price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "productserialnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "rate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "serviceaddress"): Xrm.LookupAttribute<"customeraddress">;
    getAttribute(attributeName: "title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "totalallotments"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "activeon"): Xrm.DateControl;
    getControl(controlName: "allotmentsremaining"): Xrm.NumberControl;
    getControl(controlName: "allotmentsused"): Xrm.NumberControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "discount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "expireson"): Xrm.DateControl;
    getControl(controlName: "initialquantity"): Xrm.NumberControl;
    getControl(controlName: "net"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "price"): Xrm.NumberControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "productserialnumber"): Xrm.StringControl;
    getControl(controlName: "rate"): Xrm.NumberControl;
    getControl(controlName: "serviceaddress"): Xrm.LookupControl<"customeraddress">;
    getControl(controlName: "title"): Xrm.StringControl;
    getControl(controlName: "totalallotments"): Xrm.NumberControl;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
