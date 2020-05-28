class DatePicker extends BaseWidget {
  constructor(wrapper) {
    super(wrapper, utils.dateToStr(new Date()));
    const thisWidget = this;

    thisWidget.dom.input = thisWidget.dom.wrapper.querySelector(select.widgets.datePicker.input);

    thisWidget.initPlugin();
  }

  initPlugin() {
    const thisWidget = this;

    thisWidget.minDate = new Date(thisWidget.value);
    //do poprawy addDays
    thisWidget.maxDate = thisWidget.minDate + settings.datePicker.maxDaysInFuture;

    //add flatpick

    parseValue(newValue) {
      return newValue;
    }

    isValid() {
      return true;
    }

    renderValue() {

    }
  }
