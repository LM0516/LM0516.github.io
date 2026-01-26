---
layout: post 
title: "Guida alla risoluzione di problemi di meccanica lagrangiana"
date: 2024-11-29 10:00:00 +0100
categories: [Studio, Meccanica Classica]
tags: [Meccanica_Lagrangiana, Fisica, Appunti]
math: true
---

> **Nota:** Tutti gli esempi citati nel documento fanno riferimento a degli esercizi riportati qui sotto.
> 
> **Esercizio 1:**
> ![Esercizio 1]({{ site.baseurl }}/assets/img/lagrangiana/pasted-image-20241129103153.png)
>
> **Esercizio 2:**
> ![Esercizio 2]({{ site.baseurl }}/assets/img/lagrangiana/pasted-image-20241129103218.png)

## Individuazione delle coordinate lagrangiane

### Gradi di libertà del sistema
Per prima cosa, per calcolare le equazioni di Eulero Lagrange occorre definire quanti gradi di libertà ha un sistema. 
I gradi di libertà totali di un sistema sono dati dalla differenza tra i gradi di libertà di ogni corpo (di solito 3) meno i gradi di vincolo posti nel problema.

$$GDLT = \sum GDL - \sum GDV$$

> **Esempio:** Determinare i gradi di liberà di un sistema
> ![Gradi di libertà]({{ site.baseurl }}/assets/img/lagrangiana/pasted-image-20241129102152.png)

#### Regola di Grubler
Esistono delle regole che consentono di trovare in maniera più rapida i gradi di libertà di un sistema complesso. Si può, per esempio, usare la formula di Grubler:

$$n_{gdl} = 3(m - 1) - 2C_{1} - C_{2}$$

* $n_{gdl}$: numero totale di gradi di libertà del sistema
* $m$: numero di membri di cui è costituito il meccanismo
* $C_{1}$: numero di vincoli doppi
* $C_{2}$: numero di corpi liberi

### Coordinate lagrangiane
Di solito le coordinate lagrangiane vengono fornite come dato all'inizio del problema.
Le coordinate che variando descrivono il moto di tutto il sistema corrispondono alle coordinate lagrangiane. Occorre quindi esprimere il moto di tutti i punti del sistema in funzione di esse prima di procedere a definire l'equazione di Eulero-Lagrange.

> **Esempio:** Trovare le coordinate libere del sistema partendo da delle coordinate lagrangiane date (es. 1)
> ![Coordinate libere]({{ site.baseurl }}/assets/img/lagrangiana/pasted-image-20241129102500.png)

Dopo aver individuato le coordinate lagrangiane, è opportuno calcolarne la derivata prima rispetto al tempo, ovvero la velocità.

## Equazione di Eulero-Lagrange
Per definire l'equazione di Eulero-Lagrange occorre, prima di tutto, calcolare l'energia cinetica e l'energia potenziale del sistema:

$$
\begin{gather*}
T = \frac{1}{2}m\mathbf{v}^2 \\
U = - mg\mathbf{z}
\end{gather*}
$$

I segni dell'energia cinetica e dell'energia potenziale dipendono dal sistema di riferimento associato al problema. Una volta definite le energie posso calcolare la **Lagrangiana** come:

$$L = T - U$$

Ora ho tutto il necessario per definire l'equazione di Eulero-Lagrange:

$$\frac{d}{dt} \frac{ \partial L }{ \partial \dot{q}_{j} } - \frac{ \partial L }{ \partial q_{j} } = 0$$

> **Suggerimento:** È opportuno scrivere l'equazione differenziale con a sinistra dell'uguale l'accelerazione e a destra tutti gli altri termini.

> **Esempio:** Calcolo della lagrangiana (es. 2)
> ![Calcolo Lagrangiana]({{ site.baseurl }}/assets/img/lagrangiana/pasted-image-20241129103008.png)

### Corpi rigidi
Per i corpi rigidi, l'energia cinetica include la componente rotazionale:

$$K_{rot} = \frac{1}{2} I_{CM} \dot{\theta}^2$$
$$K_{tot} = K_{CM} + K_{rot}$$

## Costanti del moto
Per individuare le costanti del moto si osservano le coordinate lagrangiane che non compaiono esplicitamente nella Lagrangiana (coordinate cicliche). Se $q_j$ è una coordinata ciclica:

$$L_{0} = \frac{ \partial L }{ \partial \dot{q} } = \text{cost.}$$

### Integrale di Jacobi
Un modo alternativo è l'energia di Jacobi:

$$Q = \sum \frac{ \partial L }{ \partial \dot{q}_{i} }\dot{q}_{i} - L$$

## Punti di equilibrio
Per calcolare i punti di equilibrio occorre che la divergenza dell'energia potenziale sia nulla:

$$\bar{\nabla}U = 0 \implies \begin{cases} \frac{ \partial U }{ \partial x } = 0 \\ \frac{ \partial U }{ \partial y } = 0 \end{cases}$$

La stabilità si studia analizzando la matrice Hessiana dell'energia potenziale nel punto critico.


