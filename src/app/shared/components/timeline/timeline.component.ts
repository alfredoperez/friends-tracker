import { AfterContentInit, Component, ElementRef, HostListener, Input, OnChanges, ViewChild, } from '@angular/core';
import * as d3 from 'd3';
import { AccessorType, DimensionsType, getUniqueId, ScaleType } from '../chart';
import { TimelineDataPoint } from './timeline.model';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss'],
})
export class TimelineComponent implements AfterContentInit, OnChanges {

  /**
   * The data to be displayed in the time line chart
   */
  @Input() data: Array<TimelineDataPoint>;

  /**
   * The label for x
   */
  @Input() xLabel: string;

  /**
   * The label for y
   */
  @Input() yLabel: string;

  /**
   * Function to get the value from the object for the x
   */
  @Input() xAccessor: AccessorType;

  /**
   * Function to get the value from the object for the y
   */
  @Input() yAccessor: AccessorType;

  public dimensions: DimensionsType;
  public xScale: ScaleType;
  public yScale: ScaleType;
  public xAccessorScaled: AccessorType;
  public yAccessorScaled: AccessorType;
  public y0AccessorScaled: AccessorType;
  public formatDate: (date: object) => string = d3.timeFormat('%-b %-d');
  public gradientId: string = getUniqueId('Timeline-gradient');
  public gradientColors: string[] = ['rgb(226, 222, 243)', '#f8f9fa'];

  @ViewChild('container', {static: true}) container: ElementRef;

  constructor() {
    this.dimensions = {
      marginTop: 40,
      marginRight: 30,
      marginBottom: 75,
      marginLeft: 75,
      height: 300,
      width: 600,
    };
    this.dimensions = {
      ...this.dimensions,
      boundedHeight: Math.max(
        this.dimensions.height -
        this.dimensions.marginTop -
        this.dimensions.marginBottom,
        0
      ),
      boundedWidth: Math.max(
        this.dimensions.width -
        this.dimensions.marginLeft -
        this.dimensions.marginRight,
        0
      ),
    };
  }

  @HostListener('window:resize')
  windowResize(): void {
    this.updateDimensions();
  }

  updateDimensions(): void {
    this.dimensions.width = this.container.nativeElement.offsetWidth;
    this.dimensions.boundedWidth = Math.max(
      this.dimensions.width -
      this.dimensions.marginLeft -
      this.dimensions.marginRight,
      0
    );
    this.updateScales();
  }

  ngAfterContentInit(): void {
    this.updateDimensions();
  }

  ngOnChanges(): void {
    this.updateScales();
  }

  updateScales(): void {
    this.xScale = d3
      .scaleTime()
      .domain(d3.extent(this.data, this.xAccessor))
      .range([0, this.dimensions.boundedWidth]);

    this.yScale = d3
      .scaleLinear()
      .domain(d3.extent(this.data, this.yAccessor))
      .range([this.dimensions.boundedHeight, 0])
      .nice();

    this.xAccessorScaled = (d) => this.xScale(this.xAccessor(d));
    this.yAccessorScaled = (d) => this.yScale(this.yAccessor(d));
    this.y0AccessorScaled = this.yScale(this.yScale.domain()[0]);
  }
}
