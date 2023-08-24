package lk.fleet.service;

import lk.fleet.dto.DeliveryDTO;
import lk.fleet.dto.DeliveryItemDetailDTO;
import lk.fleet.dto.DeliveryPassengerDetailDTO;
import lk.fleet.dto.DeliveryReportDTO;
import lk.fleet.entity.Delivery;
import lk.fleet.entity.DeliveryItemDetail;
import lk.fleet.entity.DeliveryPassengerDetail;

import java.util.List;

public interface DeliveryService {

    DeliveryDTO addItemDelivery(Delivery delivery);

    DeliveryDTO addPassengerDelivery(Delivery delivery);

    DeliveryDTO updateDelivery(String deliveryId, Delivery delivery);

    boolean deleteDelivery(String deliveryId);

    DeliveryItemDetailDTO addItemToDelivery(DeliveryItemDetail deliveryItemDetail);

    DeliveryPassengerDetailDTO addPassengerToDelivery(DeliveryPassengerDetail deliveryPassengerDetail);

    DeliveryItemDetailDTO updateItemOnDelivery(String deliveryItemId, DeliveryItemDetail deliveryItemDetail);

    DeliveryPassengerDetailDTO updatePassengerOnDelivery(String deliveryPassengerId, DeliveryPassengerDetail deliveryPassengerDetail);

    boolean deleteItemOnDelivery(String deliveryItemId);

    boolean deletePassengerOnDelivery(String deliveryPassengerId);

    List<DeliveryDTO> getAllDeliveries(String deliveryType);

    List<DeliveryDTO> getAllDeliveriesByDate(String deliveryType, String date);

    List<DeliveryDTO> getAllDeliveriesByCompany(String deliveryType, String company);

    DeliveryDTO addPassengerItemDelivery(Delivery delivery);

    DeliveryReportDTO getDeliveriesReportWeekly(int weeks);

    DeliveryReportDTO getDeliveriesReportDaily(int weeks);

    //SecurityOfficer
    DeliveryDTO updateDeliveryStatus(String deliveryId, Delivery delivery, String officerId);
}
