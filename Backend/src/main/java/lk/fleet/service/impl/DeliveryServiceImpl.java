package lk.fleet.service.impl;

import lk.fleet.dto.*;
import lk.fleet.entity.*;
import lk.fleet.repository.DeliveryItemDetailRepository;
import lk.fleet.repository.DeliveryPassengerDetailRepository;
import lk.fleet.repository.DeliveryRepository;
import lk.fleet.service.DeliveryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.TemporalField;
import java.time.temporal.WeekFields;
import java.util.ArrayList;
import java.sql.Date;
import java.util.List;
import java.util.Locale;
import java.util.Optional;

@Service
public class DeliveryServiceImpl implements DeliveryService {

    @Autowired
    private DeliveryRepository deliveryRepository;
    @Autowired
    private DeliveryItemDetailRepository deliveryItemDetailRepository;
    @Autowired
    private DeliveryPassengerDetailRepository deliveryPassengerDetailRepository;

    @Override
    public DeliveryDTO addItemDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("IDEL" + dateTime);
        delivery.setDeliveryType("Item");
        int count = 0;
        for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
            deliveryItemDetail.setItemDetailId("DELIT" + ++count + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO addPassengerDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("PDEL" + dateTime);
        delivery.setDeliveryType("Passenger");
        int count = 0;
        for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
            deliveryPassengerDetail.setPassengerDetailId("DELPA" + ++count + dateTime);
            deliveryPassengerDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO addPassengerItemDelivery(Delivery delivery) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        delivery.setDeliveryId("PIDEL" + dateTime);
        delivery.setDeliveryType("PassengerItem");
        int countItem = 0, countPassenger = 0;
        for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
            deliveryPassengerDetail.setPassengerDetailId("DELPA" + ++countPassenger + dateTime);
            deliveryPassengerDetail.setDelivery(delivery);
        }
        for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
            deliveryItemDetail.setItemDetailId("DELIT" + ++countItem + dateTime);
            deliveryItemDetail.setDelivery(delivery);
        }
        return new DeliveryDTO(deliveryRepository.save(delivery));
    }

    @Override
    public DeliveryDTO updateDelivery(String deliveryId, Delivery delivery) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(deliveryId);
        if (optionalDelivery.isPresent()) {
            Delivery deliveryObj = optionalDelivery.get();
            deliveryObj.setDeliveryPersonName(delivery.getDeliveryPersonName());
            deliveryObj.setDeliveryPersonNic(delivery.getDeliveryPersonNic());
            deliveryObj.setContactNumber(delivery.getContactNumber());
            deliveryObj.setAddress(delivery.getAddress());
            deliveryObj.setCompanyName(delivery.getCompanyName());
            deliveryObj.setDeliveryDateTime(delivery.getDeliveryDateTime());
            deliveryObj.setVehicleNumber(delivery.getVehicleNumber());
            deliveryObj.setEmailAddress(delivery.getEmailAddress());
            return new DeliveryDTO(deliveryRepository.save(deliveryObj));
        }
        return null;
    }

    @Override
    public boolean deleteDelivery(String deliveryId) {
        deliveryRepository.deleteById(deliveryId);
        return true;
    }

    @Override
    public DeliveryItemDetailDTO addItemToDelivery(DeliveryItemDetail deliveryItemDetail) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        deliveryItemDetail.setItemDetailId("DELIT" + 0 + dateTime);
        return new DeliveryItemDetailDTO(deliveryItemDetailRepository.save(deliveryItemDetail));
    }

    @Override
    public DeliveryPassengerDetailDTO addPassengerToDelivery(DeliveryPassengerDetail deliveryPassengerDetail) {
        String dateTime = LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyyMMddhhmmss"));
        deliveryPassengerDetail.setPassengerDetailId("DELPA" + 0 + dateTime);
        return new DeliveryPassengerDetailDTO(deliveryPassengerDetailRepository.save(deliveryPassengerDetail));
    }

    @Override
    public DeliveryItemDetailDTO updateItemOnDelivery(String deliveryItemId, DeliveryItemDetail deliveryItemDetail) {
        Optional<DeliveryItemDetail> optionalDeliveryItemDetail = deliveryItemDetailRepository.findById(deliveryItemId);
        if (optionalDeliveryItemDetail.isPresent()) {
            DeliveryItemDetail deliveryItemDetailObj = optionalDeliveryItemDetail.get();
            deliveryItemDetailObj.setItemName(deliveryItemDetail.getItemName());
            deliveryItemDetailObj.setItemType(deliveryItemDetail.getItemType());
            deliveryItemDetailObj.setItemQty(deliveryItemDetail.getItemQty());
            return new DeliveryItemDetailDTO(deliveryItemDetailRepository.save(deliveryItemDetailObj));
        }
        return null;
    }

    @Override
    public DeliveryPassengerDetailDTO updatePassengerOnDelivery(String deliveryPassengerId, DeliveryPassengerDetail deliveryPassengerDetail) {
        Optional<DeliveryPassengerDetail> optionalDeliveryPassengerDetail = deliveryPassengerDetailRepository.findById(deliveryPassengerId);
        if (optionalDeliveryPassengerDetail.isPresent()) {
            DeliveryPassengerDetail deliveryPassengerDetailObj = optionalDeliveryPassengerDetail.get();
            deliveryPassengerDetailObj.setPassengerName(deliveryPassengerDetail.getPassengerName());
            deliveryPassengerDetailObj.setPassengerNic(deliveryPassengerDetail.getPassengerNic());
            deliveryPassengerDetailObj.setContactNumber(deliveryPassengerDetail.getContactNumber());
            deliveryPassengerDetailObj.setPassengerType(deliveryPassengerDetail.getPassengerType());
            return new DeliveryPassengerDetailDTO(deliveryPassengerDetailRepository.save(deliveryPassengerDetailObj));
        }
        return null;
    }

    @Override
    public boolean deleteItemOnDelivery(String deliveryItemId) {
        deliveryItemDetailRepository.deleteById(deliveryItemId);
        return true;
    }

    @Override
    public boolean deletePassengerOnDelivery(String deliveryPassengerId) {
        deliveryPassengerDetailRepository.deleteById(deliveryPassengerId);
        return true;
    }

    @Override
    public List<DeliveryDTO> getAllDeliveries(String deliveryType) {
        List<Delivery> deliveries = deliveryRepository.getAllDeliveriesDesc(deliveryType);
        return setDeliveryDTOs(deliveries, deliveryType);
    }

    @Override
    public List<DeliveryDTO> getAllDeliveriesByDate(String deliveryType, String date) {
        try {
            List<Delivery> deliveries = deliveryRepository.getAllDeliveriesByDate(deliveryType, new SimpleDateFormat("yyyy-MM-dd").parse(date));
            return setDeliveryDTOs(deliveries, deliveryType);
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public List<DeliveryDTO> getAllDeliveriesByCompany(String deliveryType, String company) {
        List<Delivery> deliveries = deliveryRepository.getAllDeliveriesByCompany(deliveryType, company);
        return setDeliveryDTOs(deliveries, deliveryType);
    }

    private List<DeliveryDTO> setDeliveryDTOs(List<Delivery> deliveries, String deliveryType) {
        List<DeliveryDTO> deliveryDTOS = new ArrayList<>();
        //0 - Completed, 1 - Cancelled, 2 - Pending
        for (Delivery delivery : deliveries) {
            DeliveryDTO deliveryDTO = new DeliveryDTO(delivery);
            if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                deliveryDTO.setStatus(0);
            } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                deliveryDTO.setStatus(1);
            } else if (delivery.getSecurityOfficer() == null) {
                deliveryDTO.setStatus(2);
            }
            if (deliveryType.equals("Item")) {
                List<DeliveryItemDetailDTO> deliveryItemDetailDTOS = new ArrayList<>();
                for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
                    deliveryItemDetailDTOS.add(new DeliveryItemDetailDTO(deliveryItemDetail));
                }
                deliveryDTO.setDeliveryItemDetails(deliveryItemDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            } else if (deliveryType.equals("Passenger")) {
                List<DeliveryPassengerDetailDTO> deliveryPassengerDetailDTOS = new ArrayList<>();
                for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
                    deliveryPassengerDetailDTOS.add(new DeliveryPassengerDetailDTO(deliveryPassengerDetail));
                }
                deliveryDTO.setDeliveryPassengerDetails(deliveryPassengerDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            } else if (deliveryType.equals("PassengerItem")) {
                List<DeliveryPassengerDetailDTO> deliveryPassengerDetailDTOS = new ArrayList<>();
                List<DeliveryItemDetailDTO> deliveryItemDetailDTOS = new ArrayList<>();
                for (DeliveryPassengerDetail deliveryPassengerDetail : delivery.getDeliveryPassengerDetails()) {
                    deliveryPassengerDetailDTOS.add(new DeliveryPassengerDetailDTO(deliveryPassengerDetail));
                }
                deliveryDTO.setDeliveryPassengerDetails(deliveryPassengerDetailDTOS);
                for (DeliveryItemDetail deliveryItemDetail : delivery.getDeliveryItemDetails()) {
                    deliveryItemDetailDTOS.add(new DeliveryItemDetailDTO(deliveryItemDetail));
                }
                deliveryDTO.setDeliveryItemDetails(deliveryItemDetailDTOS);
                deliveryDTOS.add(deliveryDTO);
            }
        }

        return deliveryDTOS;
    }

    @Override
    public DeliveryReportDTO getDeliveriesReportWeekly(int weeks) {
        DeliveryReportDTO deliveryReportDTO = new DeliveryReportDTO();
        TemporalField woy = WeekFields.of(Locale.getDefault()).weekOfYear();
        int week = LocalDate.now().get(woy) - 1;
        week = week - weeks;
        List<Delivery> deliveriesReportWeekly = deliveryRepository.getDeliveriesReportWeekly(week);
        int[][] reports = new int[3][4];
        for (Delivery delivery : deliveriesReportWeekly) {
            if (delivery.getDeliveryType().equals("Passenger")) {
                reports[0][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[0][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[0][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[0][3]++;
                }
            } else if (delivery.getDeliveryType().equals("Item")) {
                reports[1][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[1][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[1][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[1][3]++;
                }
            } else if (delivery.getDeliveryType().equals("PassengerItem")) {
                reports[2][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[2][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[2][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[2][3]++;
                }
            }
        }
        deliveryReportDTO.setWeeklyDeliveries(reports);

        return deliveryReportDTO;
    }

    @Override
    public DeliveryReportDTO getDeliveriesReportDaily(int weeks) {
        DeliveryReportDTO deliveryReportDTO = new DeliveryReportDTO();
        TemporalField woy = WeekFields.of(Locale.getDefault()).weekOfYear();
        int week = LocalDate.now().get(woy) - 1;
        week = week - weeks;
        List<Delivery> deliveriesReportWeekly = deliveryRepository.getDeliveriesReportWeekly(week);
        int[][][] reports = new int[7][3][4];
        for (Delivery delivery : deliveriesReportWeekly) {
            int day = delivery.getDeliveryDateTime().getDayOfWeek().getValue();
            if (day == 7) {
                day = 0;
            }
            if (delivery.getDeliveryType().equals("Passenger")) {
                reports[day][0][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[day][0][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[day][0][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[day][0][3]++;
                }
            } else if (delivery.getDeliveryType().equals("Item")) {
                reports[day][1][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[day][1][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[day][1][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[day][1][3]++;
                }
            } else if (delivery.getDeliveryType().equals("PassengerItem")) {
                reports[day][2][0]++;
                if (delivery.getSecurityOfficer() != null && delivery.isDeliveryStatus()) {
                    reports[day][2][1]++;
                } else if (delivery.getSecurityOfficer() != null && !delivery.isDeliveryStatus()) {
                    reports[day][2][2]++;
                } else if (delivery.getSecurityOfficer() == null) {
                    reports[day][2][3]++;
                }
            }
        }
        deliveryReportDTO.setDailyDeliveries(reports);
        return deliveryReportDTO;
    }

    //SecurityOfficer
    @Override
    public DeliveryDTO updateDeliveryStatus(String deliveryId, Delivery delivery, String officerId) {
        Optional<Delivery> optionalDelivery = deliveryRepository.findById(deliveryId);
        if (optionalDelivery.isPresent()) {
            Delivery deliveryObj = optionalDelivery.get();
            deliveryObj.setDeliveryStatus(delivery.isDeliveryStatus());
            SecurityOfficer securityOfficer = new SecurityOfficer();
            securityOfficer.setSecurityOfficerID(officerId);
            deliveryObj.setSecurityOfficer(securityOfficer);
            return new DeliveryDTO(deliveryRepository.save(deliveryObj));
        }
        return null;
    }
}
