class CollectsController < ApplicationController
  before_action :set_collect, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /collects
  # GET /collects.json
  def index
    @collects = Collect.all
  end

  # GET /collects/1
  # GET /collects/1.json
  def show
  end

  # GET /collects/new
  def new
    @collect = Collect.new
    @collect.measures.build
    @collect.measures.build
    @collect.measures.build
  end

  # GET /collects/1/edit
  def edit
    # receive_data_from_xbee
  end

  # def receive_data_from_xbee
  #   @serialport = Serial.new '/dev/tty.usbserial-A50285BI' # Defaults to 9600 baud, 8 data bits, and no parity
  #
  #   @serialport.write('1')
  #
  #   read_value = build_full_message
  #
  #   cookies['measure_0'] = {
  #       :value => read_value
  #   }
  # end
  #
  # def build_full_message
  #   read_value = ""
  #   for i in 0..5
  #     read_value += @serialport.read(100)
  #     sleep 1
  #   end
  #   print "last read_value = " + read_value
  #   read_value
  # end

  # POST /collects
  # POST /collects.json
  def create
    @collect = Collect.new(collect_params)

    respond_to do |format|
      if @collect.save
        format.html { redirect_to edit_collect_path(@collect), notice: 'Coleta foi criada com sucesso.' }
        format.json { render :edit, status: :created, location: @collect }
      else
        format.html { render :new }
        format.json { render json: @collect.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /collects/1
  # PATCH/PUT /collects/1.json
  def update
    respond_to do |format|
      if @collect.update(collect_params)
        format.html { redirect_to @collect, notice: 'Collect was successfully updated.' }
        format.json { render :show, status: :ok, location: @collect }
      else
        format.html { render :edit }
        format.json { render json: @collect.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /collects/1
  # DELETE /collects/1.json
  def destroy
    @collect.destroy
    respond_to do |format|
      format.html { redirect_to collects_url, notice: 'Coleta foi removida com sucesso.' }
      format.json { head :no_content }
    end
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_collect
    @collect = Collect.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def collect_params
    params.require(:collect).permit(:title, measures_attributes: [:ph, :conductivity, :temperature, :latitude, :longitude, :turbidity, :id])
  end
end
