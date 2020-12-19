<template>
  <div>
    
    <ForumNav></ForumNav>
    
    <v-row>
      <v-responsive
            >
      <div class="Donation">
        Donation
      </div>
      </v-responsive>

      <v-dialog
        v-model="dialog"
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
      >
       
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            style="width: 90px; height: 90px;"
            color="green"
            dark
           fixed
            fab
            bottom
            left
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>fas fa-money-check-alt</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-toolbar dark color="primary">
            <v-btn icon dark @click="dialog = false">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Payment Checkout</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-list three-line subheader>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Total Amount</v-list-item-subtitle>
                <v-list-item-title>¥4,000</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-subtitle>Description</v-list-item-subtitle>
                <v-list-item-title>Donation</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-divider></v-divider>
          <v-subheader style="padding-left:10px; font-size:40px"
            >Payment Details</v-subheader
          >

          <!-- credit card -->
          <div class="container--content" id="app">
            <div class="card__form">
              <div class="card__list">
                <div
                  class="card__item"
                  v-bind:class="{ '-active': isCardFlipped }"
                >
                  <div class="card__item--side -front">
                    <div
                      class="card__item--focus"
                      v-bind:class="{ '-active': focusElementStyle }"
                      v-bind:style="focusElementStyle"
                      ref="focusElement"
                    ></div>
                    <!-- END .card__item--focus -->
                    <div class="card__item--cover">
                      <img
                        v-bind:src="
                          'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                            currentCardBackground +
                            '.jpeg'
                        "
                        class="card__item--bg"
                      />
                    </div>
                    <!-- END .card__item--cover -->
                    <div class="card__item--wrapper">
                      <div class="card__item--top">
                        <img
                          src="https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png"
                          class="card__item--chip"
                        />
                        <div class="card__item--type">
                          <transition name="slide-fade-up">
                            <img
                              v-bind:src="
                                'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                                  getCardType +
                                  '.png'
                              "
                              v-if="getCardType"
                              v-bind:key="getCardType"
                              alt=""
                              class="card__item--typeImg"
                            />
                          </transition>
                        </div>
                        <!-- END .card__item--type -->
                      </div>
                      <!-- END .card__item--top -->
                      <label
                        for="cardNumber"
                        class="card__item--number"
                        ref="cardNumber"
                      >
                        <template v-if="getCardType === 'amex'">
                          <span
                            v-for="(n, $index) in amexCardMask"
                            :key="$index"
                          >
                            <transition name="slide-fade-up">
                              <div
                                class="card__item--numberItem"
                                v-if="
                                  $index > 4 &&
                                    $index < 14 &&
                                    cardNumber.length > $index &&
                                    n.trim() !== ''
                                "
                              >
                                *
                              </div>
                              <!-- END .card__item--numberItem-->
                              <div
                                class="card__item--numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                :key="$index"
                                v-else-if="cardNumber.length > $index"
                              >
                                {{ cardNumber[$index] }}
                              </div>
                              <!-- NED .card__item--numberItem-->
                              <div
                                class="card__item--numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                v-else
                                :key="$index + 1"
                              >
                                {{ n }}
                              </div>
                            </transition>
                          </span>
                        </template>

                        <template v-else>
                          <span
                            v-for="(n, $index) in otherCardMask"
                            :key="$index"
                          >
                            <transition name="slide-fade-up">
                              <div
                                class="card__item--numberItem"
                                v-if="
                                  $index > 4 &&
                                    ($index < 15) &
                                      (cardNumber.length > $index) &&
                                    n.trim() !== ''
                                "
                              >
                                *
                              </div>
                              <!-- END .card__item--numberItem -->
                              <div
                                class="card__item--numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                :key="$index"
                                v-else-if="cardNumber.length > $index"
                              >
                                {{ cardNumber[$index] }}
                              </div>
                              <!-- END .card__item--numberItem -->
                              <div
                                class="card__item--numberItem"
                                :class="{ '-active': n.trim() === '' }"
                                v-else
                                :key="$index + 1"
                              >
                                {{ n }}
                              </div>
                              <!-- END .card__item--numberItem -->
                            </transition>
                          </span>
                        </template>
                      </label>

                      <div class="card__item--content">
                        <label
                          for="cardName"
                          class="card__item--info"
                          ref="cardName"
                        >
                          <div class="card__item--holder">
                            Card holder
                          </div>
                          <!-- END .card__item--holder -->
                          <transition name="slide-fade-up">
                            <div
                              class="card__item--name"
                              v-if="cardName.length"
                              key="1"
                            >
                              <transition-group name="slide-fade-right">
                                <span
                                  class="card__item--nameItem"
                                  v-for="(n, $index) in cardName.replace(
                                    /\s\s+/g,
                                    ' '
                                  )"
                                  v-bind:key="$index + 1"
                                  >{{ n }}</span
                                >
                              </transition-group>
                            </div>
                            <!-- END .card__item--name -->
                            <div class="card__item--name" v-else key="2">
                              Full name
                            </div>
                            <!-- END .card__item--name -->
                          </transition>
                        </label>

                        <div class="card__item--date" ref="cardDate">
                          <label for="cardMonth" class="card__item--dateTitle"
                            >Expires</label
                          >
                          <label for="cardMonth" class="card__item--dateItem">
                            <transition name="slide-fade-up">
                              <span v-if="cardMonth" v-bind:key="cardMonth">{{
                                cardMonth
                              }}</span>
                              <span v-else key="2">MM</span>
                            </transition>
                          </label>
                          /
                          <label for="cardYear" class="card__item--dateItem">
                            <transition name="slide-fade-up">
                              <span v-if="cardYear" v-bind:key="cardYear">{{
                                String(cardYear).slice(2, 4)
                              }}</span>
                              <span v-else key="2">YY</span>
                            </transition>
                          </label>
                        </div>
                        <!-- END .card__item--date -->
                      </div>
                      <!-- END .card__item--content -->
                    </div>
                    <!-- END .card__item--wrapper -->
                  </div>
                  <!-- END .card__item--side -->

                  <div class="card__item--side -back">
                    <div class="card__item--cover">
                      <img
                        v-bind:src="
                          'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                            currentCardBackground +
                            '.jpeg'
                        "
                        class="card__item--bg"
                      />
                    </div>
                    <!-- END .card__item--cover -->

                    <div class="card__item--band"></div>
                    <!-- END .card__item--band -->
                    <div class="card__item--cvv">
                      <div class="card__item--cvvTitle">CVV</div>
                      <!-- END .card__item--cvvTitle -->
                      <div class="card__item--cvvBand">
                        <span v-for="(n, $index) in cardCvv" :key="$index"
                          >*</span
                        >
                      </div>
                      <!-- END .card__item--cvvBand -->
                      <div class="card__item--type">
                        <img
                          v-bind:src="
                            'https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/' +
                              getCardType +
                              '.png'
                          "
                          v-if="getCardType"
                          class="card__item--typeImg"
                        />
                      </div>
                      <!-- END .card__item--type -->
                    </div>
                    <!-- END .card__item--cvv -->
                  </div>
                  <!-- END .card__item--side -->
                </div>
                <!-- END .card__item -->
              </div>
              <!-- END .card__list -->

              <div class="card__form--inner">
                <div class="card__input">
                  <label for="cardNumber" class="card__input--label"
                    >Card number</label
                  >
                  <input
                    type="text"
                    id="cardNumber"
                    class="card__input--input"
                    v-mask="generateCardNumberMask"
                    v-model="cardNumber"
                    v-on:focus="focusInput"
                    v-on:blur="blurInput"
                    data-ref="cardNumber"
                    autocomplete="off"
                  />
                </div>
                <!-- END .card__input -->
                <div class="card__input">
                  <label for="cardName" class="card__input--label"
                    >Card holder</label
                  >
                  <input
                    type="text"
                    id="cardName"
                    class="card__input--input"
                    v-model="cardName"
                    v-on:focus="focusInput"
                    v-on:blur="blurInput"
                    data-ref="cardName"
                    autocomplete="off"
                  />
                </div>
                <!-- END .card__input -->
                <div class="card__form--row">
                  <div class="card__form--col">
                    <div class="card__form--group">
                      <label for="cardMonth" class="card__input--label"
                        >Expiration date</label
                      >
                      <select
                        class="card__input--input -select"
                        id="cardMonth"
                        v-model="cardMonth"
                        v-on:focus="focusInput"
                        v-on:blur="blurInput"
                        data-ref="cardDate"
                      >
                        <option value="" disable selected>Month</option>
                        <option
                          v-bind:value="n < 10 ? '0' + n : n"
                          v-for="n in 12"
                          v-bind:disabled="n < minCardMonth"
                          v-bind:key="n"
                        ></option>
                      </select>
                      <select
                        class="card__input--input -select"
                        id="cardYear"
                        v-model="cardYear"
                        v-on:focus="focusInput"
                        v-on:blur="blurInput"
                        data-ref="cardDate"
                      >
                        <option value="" disabled selected>Year</option>
                        <option
                          v-bind:value="$index + minCardYear"
                          v-for="(n, $index) in 12"
                          v-bind:key="n"
                          >{{ $index + minCardYear }}</option
                        >
                      </select>
                    </div>
                    <!-- END .card__form--group -->
                  </div>
                  <!-- END .card__form--col -->

                  <div class="card__form--col -cvv">
                    <div class="card__input">
                      <label for="cardCvv" class="card__input--label"
                        >CVV</label
                      >
                      <input
                        type="text"
                        class="card__input--input"
                        id="cardCvv"
                        v-mask="'####'"
                        maxlength="4"
                        v-model="cardCvv"
                        v-on:focus="flipCard(true)"
                        v-on:blur="flipCard(false)"
                        autocomplete="off"
                      />
                    </div>
                    <!-- END .card__input -->
                  </div>
                  <!-- END .card__form--col -->
                </div>
                <!-- END .card__form--row -->

                <button class="card__form--button">Submit</button>
              </div>
              <!-- END .card__form--inner -->
            </div>
            <!-- END .card__form -->
          </div>
          <!-- END .container--content -->

          <!-- credit card -->
        </v-card>
      </v-dialog>

      <v-container :key="right" class="grey lighten-5 mb-6">
        <v-row :align="left" no-gutters style="height: 1050px">
          <v-col :cols="6" class="mx-auto1" align-self="left">
            <v-card style="height: 550px" max-width="550">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="413px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>

          <v-col :cols="6" class="mx-auto1" align-self="left">
            <v-card style="height: 550px" max-width="550">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="413px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>

          <v-col :cols="3">
            <v-card class="mx-auto" style="height: 320px" max-width="250">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="150px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>

          <v-col cols="3">
            <v-card class="mx-auto" style="height: 320px" max-width="250">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="150px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>

          <v-col :cols="3">
            <v-card class="mx-auto" style="height: 320px" max-width="250">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="150px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>

          <v-col :cols="3">
            <v-card class="mx-auto" style="height: 320px" max-width="250">
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="150px"
              ></v-img>

              <v-card-title>
                【 EMERGENCY! 】 To protect our planet!
              </v-card-title>

              <v-card-subtitle style="font-size:15px">
                <div class="goal">Goal</div>
                <div class="subs">
                  <div style="font-size: 25px"><b>¥4000</b></div>
                  /¥50,000
                </div>
              </v-card-subtitle>
              <v-progress-linear v-model="skill" color="blue-grey" height="25">
                <template v-slot="{ value }">
                  <strong>{{ Math.ceil(value) }}%</strong>
                </template>
              </v-progress-linear>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-row>
    <div class="Recommendation">
      Recommendation
    </div>
    <!-- Recommendation -->
    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>

        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- Recommendation -->

    <div class="New-Arrival">
      New Arrival
    </div>
    <!-- New arrival -->
    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container :key="center" class="grey lighten-5 mb-6">
      <v-row :align="center" no-gutters style="height: 350px;">
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
        <v-col>
          <v-card class="mx-auto" style="height: 320px" max-width="250">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="150px"
            ></v-img>

            <v-card-title>
              【 EMERGENCY! 】 To protect our planet!
            </v-card-title>

            <v-card-subtitle style="font-size:15px">
              <div class="goal">Goal</div>
              <div class="subs">
                <div style="font-size: 25px"><b>¥4000</b></div>
                /¥50,000
              </div>
            </v-card-subtitle>
            <v-progress-linear v-model="skill" color="blue-grey" height="25">
              <template v-slot="{ value }">
                <strong>{{ Math.ceil(value) }}%</strong>
              </template>
            </v-progress-linear>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- New arrival -->
    <v-footer id="foot" padless>
      <v-row id="foot" justify="center" no-gutters>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          color="black"
          text
          rounded
          class="my-2"
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>

        <v-col class="py-4 text-center black--text" cols="12">
          <strong class="font-weight-black">
            ©{{ new Date().getFullYear() }} ClimateTalk</strong
          >
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    skill: 20,
    show: false,
    alignments: ["center", "center"],
    alignments_second: ["center", "center"],
    icons: ["mdi-facebook", "mdi-twitter"],
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    currentCardBackground: Math.floor(Math.random() * 25 + 1),
    cardName: "",
    cardNumber: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    minCardYear: new Date().getFullYear(),
    amexCardMask: "#### ##### #####",
    otherCardMask: "#### #### #### ####",
    cardNumberTemp: "",
    isCardFlipped: false,
    focusElementStyle: null,
    isInputFocused: false,
  }),

  mounted() {
    this.cardNumberTemp = this.otherCardMask;

    document.getElementById("cardNumber").focus();
  },
  computed: {
    getCardType() {
      let number = this.cardNumber;

      let re = new RegExp("^4");
      if (number.match(re) != null) return "visa";

      re = new RegExp("^(34|37)");
      if (number.match(re) != null) return "amex";

      re = new RegExp("^5[1-5]");
      if (number.match(re) != null) return "mastercard";

      re = new RegExp("^6011");
      if (number.match(re) != null) return "discover";

      return "visa"; // default card type
    },
    generateCardNumberMask() {
      return this.getCardType === "amex"
        ? this.amexCardMask
        : this.otherCardMask;
    },
    minCardMonth() {
      if (this.cardYear === this.minCardYear) return new Date().getMonth() + 1;
      return 1;
    },
  },
  watch: {
    cardYear() {
      if (this.cardMonth < this.minCardMonth) {
        this.cardMonth = "";
      }
    },
  },

  methods: {
    flipCard(status) {
      this.isCardFlipped = status;
    },
    focusInput(e) {
      this.isInputFocused = true;
      let targetRef = e.target.dataset.ref;
      let target = this.$refs[targetRef];
      this.focusElementStyle = {
        width: `${target.offsetWidth}px`,
        height: `${target.offsetHeight}px`,
        transform: `translateX(${target.offsetLeft}px) translateY(${target.offsetTop}px)`,
      };
    },
    blurInput() {
      let vm = this;
      setTimeout(() => {
        if (!vm.isInputFocused) {
          vm.focusElementStyle = null;
        }
      }, 300);
      vm.isInputFocused = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
// @import url("https://fonts.googleapis.com/css?family=Source+Code+Pro:400,500,600,700|Source+Sans+Pro:400,600,700&display=swap");

* {
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  &:focus {
    outline: none;
  }
}

.subs {
  padding-left: 30px;
}

.goal {
  width: 37px;
  height: 13px;
  margin: 1px 1px 17px;
  font-size: 15px;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.testbed {
  width: 495px;
  height: 10px;
  padding-left: 250px;
  margin: 117px 112px 91px 192px;
  background-color: #28cd3d;
}

.Donation {
  width: 214.5px;
  height: 17px;
  padding-left: 250px;
  margin: 50px 60px 190px 300px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: "Open Sans", sans-serif;
  font-size: 80px;
  padding-top: 60px;
  text-align: center;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #28cd3d;
}

.font-weight-black {
  font-family: Comfortaa, cursive;
  color: #28cd3d;
  padding-top: 18px;
  font-size: 1.3em;
}

.special-card {
  padding-left: 260px;
  padding-top: -140px;
}

.Recommendation {
  width: 582px;
  height: 98px;
  margin: 116px 87px 64px 130px;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.New-Arrival {
  width: 426px;
  height: 101px;
  margin: 93px 46px 62px 136px;
  font-family: "Open Sans", sans-serif;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  text-align: left;
  color: #28cd3d;
}

.mx-auto {
  height: 600px;
}

.mx-auto1 {
  padding-top: 20px;
}

.subline {
  white-space: nowrap;
}

.nobreak {
  white-space: nowrap;
}

.price {
  font-size: 30px;
}

#foot {
  background-color: #e4e4dd;
}

.bigbox {
  // padding-right: 600px;

  // margin: 0 60px 0 0;
  // padding: 0 0 8.7px;
  // box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
}

$primary-font-family: "Source Sans Pro", sans-serif;
$secondary-font-family: serif;

$base-font-size: 16px;

$primary-color: white;
$secondary-color: #b5afaf;
$primary-red: #670000;
$primary-blue: #000067;

$full-dimensions: 100%;

$invisible-opacity: 0;
$slide-transitions: all 0.25s ease-in-out;

body {
  background: linear-gradient($primary-red, $primary-blue);
  width: auto;
  height: $full-dimensions;
  font-family: $primary-font-family;
}

* {
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
}

.container--content {
  min-height: 100vh;
  display: flex;
  padding: 50px 15px;

  @media screen and (max-width: 700px), (max-height: 500px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
}

.card__form {
  max-width: 570px;
  margin: auto;
  width: $full-dimensions;

  @media screen and (max-width: 576px) {
    margin: 0 auto;
  }

  &--inner {
    background: $primary-color;
    box-shadow: 0 30px 60px 0 rgba(90, 116, 148, 0.4);
    border-radius: 10px;
    padding: 35px;
    padding-top: 180px;

    @media screen and (max-width: 480px) {
      padding: 25px;
      padding-top: 165px;
    }

    @media screen and (max-width: 360px) {
      padding: 15px;
      padding-top: 165px;
    }
  }

  &--row {
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 480px) {
      flex-wrap: wrap;
    }
  }

  &--col {
    flex: auto;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }

    @media screen and (max-width: 480px) {
      margin-right: 0;
      flex: unset;
      width: $full-dimensions;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &--cvv {
      max-width: 150px;

      @media screen and (max-width: 480px) {
        max-width: initial;
      }
    }
  }

  &--group {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;

    .card__input--input {
      flex: 1;
      margin-right: 15px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  &--button {
    width: $full-dimensions;
    height: 55%;
    background: linear-gradient(#670000, #000067);
    border: none;
    border-radius: 5px;
    font-size: ($base-font-size + 6);
    font-weight: 500;
    font-family: $primary-font-family;
    box-shadow: 3px 10px 20px 0 rgba(35, 100, 210, 0.3);
    color: $primary-color;
    margin-top: 20px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      margin-top: 10px;
    }
  }
}

.card__item {
  max-width: 430px;
  height: 270px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 2;
  width: $full-dimensions;

  @media screen and (max-width: 480px) {
    max-width: 310px;
    height: 220px;
    width: 90%;
  }

  @media screen and (max-width: 360px) {
    height: 180px;
  }

  &.-active {
    .card__item--side {
      &.-front {
        transform: perspective(1000px) rotateY(180deg) rotateX(0deg)
          rotateZ(0deg);
      }
      &.-back {
        transform: perspective(1000px) rotateY(0) rotateX(0deg) rotateZ(0deg);
      }
    }
  }
  &--focus {
    position: absolute;
    z-index: 3;
    border-radius: 5px;
    left: 0;
    top: 0;
    width: $full-dimensions;
    height: $full-dimensions;
    transition: all 0.35s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    opacity: $invisible-opacity;
    pointer-events: none;
    overflow: hidden;
    border: 2px solid $secondary-color;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: $full-dimensions;
      height: $full-dimensions;
      background: rgb(8, 20, 47);
      border-radius: 5px;
      filter: blur(25px);
      opacity: 0.5;
    }

    &.-active {
      opacity: 1;
    }
  }

  &--side {
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 20px 60px 0 rgba(14, 42, 90, 0.55);
    transform: perspective(2000px) rotateY(0deg) rotateX(0deg) rotate(0deg);
    transform-style: preserve-3d;
    transition: all 0.8s cubic-bezier(0.71, 0.03, 0.56, 0.85);
    backface-visibility: hidden;
    height: $full-dimensions;

    &.-back {
      position: absolute;
      top: 0;
      left: 0;
      width: $full-dimensions;
      height: $full-dimensions;
      transform: perspective(2000px) rotateY(-180deg) rotateX(0deg) rotate(0deg);
      z-index: 2;
      padding: 0;

      .card__item--cover {
        transform: rotateY(-180deg);
      }
    }
  }

  &--bg {
    max-width: $full-dimensions;
    max-height: $full-dimensions;
    height: $full-dimensions;
    width: $full-dimensions;
    display: block;
    object-fit: cover;
  }

  &--cover {
    height: $full-dimensions;
    width: $full-dimensions;
    background-color: #1c1d27;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 15px;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: $full-dimensions;
      height: $full-dimensions;
      background: rgba(6, 2, 29, 0.45);
    }
  }

  &--top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 40px;
    padding: 0 10px;

    @media screen and (max-width: 480px) {
      margin-bottom: 25px;
    }

    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }

  &--chip {
    width: 60px;

    @media screen and (max-width: 480px) {
      width: 50px;
    }

    @media screen and (max-width: 360px) {
      width: 40px;
    }
  }

  &--type {
    height: 45px;
    position: relative;
    display: flex;
    justify-content: flex-end;
    max-width: 100px;
    margin-left: auto;
    width: $full-dimensions;

    @media screen and (max-width: 480px) {
      height: 40px;
      max-width: 90px;
    }

    @media screen and (max-width: 360px) {
      height: 30px;
    }
  }

  &--typeImg {
    max-width: $full-dimensions;
    max-height: $full-dimensions;
    object-fit: contain;
    object-position: top right;
  }

  &--info {
    color: #fff;
    width: $full-dimensions;
    max-width: calc($full-dimensions - 85px);
    padding: 10px 15px;
    font-weight: 500;
    display: block;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      padding: 10px;
    }
  }

  &--holder {
    opacity: 0.7;
    font-size: ($base-font-size - 3);
    margin-bottom: 6px;

    @media screen and (max-width: 480px) {
      font-size: ($base-font-size - 4);
      margin-bottom: 5px;
    }
  }

  &--wrapper {
    font-family: $primary-font-family, monospace;
    padding: 25px 15px;
    position: relative;
    z-index: 4;
    height: $full-dimensions;
    text-shadow: 7px 6px 10px rgba(14, 42, 90, 0.8);
    user-select: none;

    @media screen and (max-width: 480px) {
      padding: 20px 10px;
    }
  }

  &--name {
    font-size: ($base-font-size + 2);
    line-height: 1;
    white-space: nowrap;
    max-width: $full-dimensions;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: uppercase;

    @media screen and (max-width: 480px) {
      font-size: $base-font-size;
    }
  }

  &--nameItem {
    display: inline-block;
    min-width: 8px;
    position: relative;
  }

  &--number {
    font-weight: 500;
    line-height: 1;
    color: $primary-color;
    font-size: ($base-font-size + 11);
    margin-bottom: 35px;
    display: inline-block;
    padding: 10px 15px;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: ($base-font-size + 5);
      margin-bottom: 15px;
      padding: 10px 10px;
    }

    @media screen and (max-width: 360px) {
      font-size: ($base-font-size + 3);
      margin-bottom: 10px;
      padding: 10px 10px;
    }
  }

  &--numberItem {
    width: 16px;
    display: inline-block;

    &.-active {
      width: 30px;
    }

    @media screen and (max-width: 480px) {
      width: 13px;

      &.-active {
        width: 16px;
      }
    }

    @media screen and (max-width: 360px) {
      width: 12px;

      &.-active {
        width: 8px;
      }
    }
  }

  &--content {
    color: $primary-color;
    display: flex;
    align-items: flex-start;
  }

  &--date {
    flex-wrap: wrap;
    font-size: ($base-font-size + 2);
    margin-left: auto;
    padding: 10px;
    display: inline-flex;
    width: 80px;
    white-space: nowrap;
    flex-shrink: 0;
    cursor: pointer;

    @media screen and (max-width: 480px) {
      font-size: ($base-font-size);
    }
  }

  &--dateItem {
    position: relative;

    span {
      width: 22px;
      display: inline-block;
    }
  }

  &--dateTitle {
    opacity: 0.7;
    font-size: ($base-font-size - 3);
    padding-bottom: 6px;
    width: $full-dimensions;

    @media screen and (max-width: 480px) {
      font-size: ($base-font-size - 4);
      padding-bottom: 5px;
    }
  }

  &--band {
    background: rgba(0, 0, 19, 0.8);
    width: $full-dimensions;
    height: 50px;
    margin-top: 30px;
    position: relative;
    z-index: 2;

    @media screen and (max-width: 480px) {
      margin-top: 20px;
    }

    @media screen and (max-width: 360px) {
      height: 40px;
      margin-top: 10px;
    }
  }

  &--cvv {
    text-align: right;
    position: relative;
    z-index: 2;
    padding: 15px;

    .card__item--type {
      opacity: 0.7;
    }

    @media screen and (max-width: 360px) {
      padding: 10px 15px;
    }
  }

  &--cvvTitle {
    padding-right: 10px;
    font-size: ($base-font-size - 1);
    font-weight: 500;
    color: $primary-color;
    margin-bottom: 5px;
  }

  &--cvvBand {
    height: 45px;
    background: $primary-color;
    margin-bottom: 30px;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
    color: #1a3b5d;
    font-size: ($base-font-size + 2);
    border-radius: 4px;
    box-shadow: 0px 10px 20px -7px rgba(32, 56, 117, 0.35);

    @media screen and (max-width: 480px) {
      height: 40px;
      margin-bottom: 20px;
    }

    @media screen and (max-width: 360px) {
      margin-bottom: 15px;
    }
  }
}

.card__list {
  margin-bottom: -130px;

  @media screen and (max-width: 480px) {
    margin-bottom: -120px;
  }
}

.card__input {
  margin-bottom: 20px;

  &--label {
    font-size: 14px;
    margin-bottom: 5px;
    font-weight: 500;
    color: #1a3b5d;
    width: $full-dimensions;
    display: block;
    user-select: none;
  }

  &--input {
    width: $full-dimensions;
    height: 50px;
    border-radius: 5px;
    box-shadow: none;
    border: 1px solid #ced6e0;
    transition: all 0.3s ease-in-out;
    font-size: ($base-font-size + 2);
    padding: 5px 15px;
    background: none;
    color: #1a3b5d;
    font-family: $primary-font-family;

    &:hover,
    &:focus {
      border-color: #3d9cff;
    }

    &:focus {
      box-shadow: 0px 10px 20px -13px rgba(32, 56, 117, 0.35);
    }

    &.-select {
      -webkit-appearance: none;
      background-image: (
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAeCAYAAABuUU38AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUxJREFUeNrM1sEJwkAQBdCsngXPHsQO9O5FS7AAMVYgdqAd2IGCDWgFnryLFQiCZ8EGnJUNimiyM/tnk4HNEAg/8y6ZmMRVqz9eUJvRaSbvutCZ347bXVJy/ZnvTmdJ862Me+hAbZCTs6GHpyUi1tTSvPnqTpoWZPUa7W7ncT3vK4h4zVejy8QzM3WhVUO8ykI6jOxoGA4ig3BLHcNFSCGqGAkig2yqgpEiMsjSfY9LxYQg7L6r0X6wS29YJiYQYecemY+wHrXD1+bklGhpAhBDeu/JfIVGxaAQ9sb8CI+CQSJ+QmJg0Ii/EE2MBiIXooHRQhRCkBhNhBcEhLkwf05ZCG8ICCOpk0MULmvDSY2M8UawIRExLIQIEgHDRoghihgRIgiigBEjgiFATBACAgFgghEwSAAGgoBCBBgYAg5hYKAIFYgHBo6w9RRgAFfy160QuV8NAAAAAElFTkSuQmCC"
      );
      background-size: 12px;
      background-position: 90% center;
      background-repeat: no-repeat;
      padding-right: 30px;
    }
  }
}

.slide-fade-up-enter-active {
  transition: all $slide-transitions;
  transition-delay: 0.1s;
  position: relative;
}

.slide-fade-up-leave-active {
  transition: $slide-transitions;
  position: absolute;
}

.slide-fade-up-enter {
  opacity: $invisible-opacity;
  transform: translateY(15px);
  pointer-events: none;
}

.slide-fade-up-leave-to {
  opacity: $invisible-opacity;
  transform: translateY(-15px);
  pointer-events: none;
}

.slide-fade-right-enter-active {
  transition: $slide-transitions;
  transition-delay: 0.1s;
  position: relative;
}

.slide-fade-right-leave-active {
  transition: $slide-transitions;
  position: absolute;
}

.slide-fade-right-center {
  opacity: $invisible-opacity;
  transform: translateX(10px) rotate(45deg);
  pointer-events: none;
}

.slide-fade-right-leave-to {
  opacity: $invisible-opacity;
  transform: translateX(-10px) rotate(45deg);
  pointer-events: none;
}
</style>
