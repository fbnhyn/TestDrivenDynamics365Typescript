declare namespace Form.contracttemplate.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "abbreviation"): Xrm.Attribute<string>;
      get(name: "allotmenttypecode"): Xrm.OptionSetAttribute<contracttemplate_allotmenttypecode>;
      get(name: "billingfrequencycode"): Xrm.OptionSetAttribute<contracttemplate_billingfrequencycode>;
      get(name: "contractservicelevelcode"): Xrm.OptionSetAttribute<contracttemplate_contractservicelevelcode>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "effectivitycalendar"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "usediscountaspercentage"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_ContractTemplateCalendar"): Xrm.IFrameControl;
      get(name: "abbreviation"): Xrm.StringControl;
      get(name: "allotmenttypecode"): Xrm.OptionSetControl<contracttemplate_allotmenttypecode>;
      get(name: "billingfrequencycode"): Xrm.OptionSetControl<contracttemplate_billingfrequencycode>;
      get(name: "contractservicelevelcode"): Xrm.OptionSetControl<contracttemplate_contractservicelevelcode>;
      get(name: "description"): Xrm.StringControl;
      get(name: "effectivitycalendar"): Xrm.StringControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "usediscountaspercentage"): Xrm.OptionSetControl<boolean>;
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
    getAttribute(attributeName: "abbreviation"): Xrm.Attribute<string>;
    getAttribute(attributeName: "allotmenttypecode"): Xrm.OptionSetAttribute<contracttemplate_allotmenttypecode>;
    getAttribute(attributeName: "billingfrequencycode"): Xrm.OptionSetAttribute<contracttemplate_billingfrequencycode>;
    getAttribute(attributeName: "contractservicelevelcode"): Xrm.OptionSetAttribute<contracttemplate_contractservicelevelcode>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "effectivitycalendar"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "usediscountaspercentage"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_ContractTemplateCalendar"): Xrm.IFrameControl;
    getControl(controlName: "abbreviation"): Xrm.StringControl;
    getControl(controlName: "allotmenttypecode"): Xrm.OptionSetControl<contracttemplate_allotmenttypecode>;
    getControl(controlName: "billingfrequencycode"): Xrm.OptionSetControl<contracttemplate_billingfrequencycode>;
    getControl(controlName: "contractservicelevelcode"): Xrm.OptionSetControl<contracttemplate_contractservicelevelcode>;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "effectivitycalendar"): Xrm.StringControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "usediscountaspercentage"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
