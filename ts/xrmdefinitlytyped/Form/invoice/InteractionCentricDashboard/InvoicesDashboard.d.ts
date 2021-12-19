declare namespace Form.invoice.InteractionCentricDashboard {
  namespace InvoicesDashboard {
    namespace Tabs {
      interface StreamsContainer extends Xrm.SectionCollectionBase {
        get(name: "Streams"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact"> | null;
      get(name: "salesorderid"): Xrm.LookupAttribute<"salesorder"> | null;
      get(name: "totalamount"): Xrm.NumberAttribute | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Component189d89a"): Xrm.SubGridControl<"invoice">;
      get(name: "Component303990c"): Xrm.SubGridControl<"invoice">;
      get(name: "Component419bfe4"): Xrm.SubGridControl<"invoice">;
      get(name: "Componentc1a6086"): Xrm.SubGridControl<"invoice">;
      get(name: "Component{a15651d1-c389-5d5d-6a2c-d26b35a5d118}"): Xrm.BaseControl;
      get(name: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
      get(name: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
      get(name: "header_process_totalamount"): Xrm.NumberControl | null;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "StreamsContainer"): Xrm.PageTab<Tabs.StreamsContainer>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface InvoicesDashboard extends Xrm.PageBase<InvoicesDashboard.Attributes,InvoicesDashboard.Tabs,InvoicesDashboard.Controls> {
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact"> | null;
    getAttribute(attributeName: "salesorderid"): Xrm.LookupAttribute<"salesorder"> | null;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Component189d89a"): Xrm.SubGridControl<"invoice">;
    getControl(controlName: "Component303990c"): Xrm.SubGridControl<"invoice">;
    getControl(controlName: "Component419bfe4"): Xrm.SubGridControl<"invoice">;
    getControl(controlName: "Componentc1a6086"): Xrm.SubGridControl<"invoice">;
    getControl(controlName: "Component{a15651d1-c389-5d5d-6a2c-d26b35a5d118}"): Xrm.BaseControl;
    getControl(controlName: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
    getControl(controlName: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
    getControl(controlName: "header_process_totalamount"): Xrm.NumberControl | null;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
